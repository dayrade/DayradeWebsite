import csvData from '@assets/DAYRADE_1761224192248.csv?raw';

export interface ContentSection {
  page: string;
  section: string;
  description: string;
}

export interface ContentRegistry {
  [page: string]: {
    [section: string]: string;
  };
}

function parseCSV(csvText: string): ContentSection[] {
  const sections: ContentSection[] = [];
  let currentPage = '';
  
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let insideQuotes = false;
  
  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];
    
    if (char === '"' && nextChar === '"' && insideQuotes) {
      currentField += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if (char === '\n' && !insideQuotes) {
      currentRow.push(currentField);
      if (currentRow.some(field => field.trim())) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentField = '';
    } else if (char === '\r' && !insideQuotes) {
      // Skip carriage returns
    } else {
      currentField += char;
    }
  }
  
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(field => field.trim())) {
      rows.push(currentRow);
    }
  }
  
  for (let i = 1; i < rows.length; i++) {
    const [page, section, description] = rows[i];
    
    if (page && page.trim()) {
      currentPage = page.trim();
    }
    
    if (section && section.trim() && description && description.trim()) {
      sections.push({
        page: currentPage,
        section: section.trim(),
        description: description.trim()
      });
    }
  }
  
  return sections;
}

function buildContentRegistry(sections: ContentSection[]): ContentRegistry {
  const registry: ContentRegistry = {};
  
  for (const section of sections) {
    if (!registry[section.page]) {
      registry[section.page] = {};
    }
    
    registry[section.page][section.section] = section.description;
  }
  
  return registry;
}

const contentSections = parseCSV(csvData);
export const contentRegistry = buildContentRegistry(contentSections);

export function getPageContent(page: string): { [section: string]: string } {
  return contentRegistry[page] || {};
}

export function getSectionContent(page: string, section: string): string {
  return contentRegistry[page]?.[section] || '';
}

export function getAllSections(page: string): string[] {
  return Object.keys(contentRegistry[page] || {});
}

export function parseHeroContent(content: string): {
  headline?: string;
  subheadline?: string;
  cta?: string;
} {
  const result: { headline?: string; subheadline?: string; cta?: string } = {};
  
  const h1Match = content.match(/H1:\s*([\s\S]+?)(?:\s+Subhead:|\s+CTA:|$)/);
  const h2Match = content.match(/H2:\s*([\s\S]+?)(?:\s+Subhead:|\s+CTA:|$)/);
  const headlineMatch = content.match(/(?:Headline|headline|Mixed-Weight Headline|HTML):\s*([\s\S]+?)(?:\s+Subhead|\s+CTA:|$)/);
  const subheadMatch = content.match(/Subhead(?:line)?:\s*([\s\S]+?)(?:\s+CTA:|$)/);
  const ctaMatch = content.match(/CTA:\s*([\s\S]+?)$/);
  
  if (h1Match) {
    result.headline = h1Match[1].trim();
  } else if (h2Match) {
    result.headline = h2Match[1].trim();
  } else if (headlineMatch) {
    result.headline = headlineMatch[1].trim();
  }
  
  if (subheadMatch) {
    result.subheadline = subheadMatch[1].trim();
  }
  
  if (ctaMatch) {
    result.cta = ctaMatch[1].trim();
  }
  
  return result;
}

export function parseFeatureContent(content: string): {
  headline?: string;
  body?: string;
  features?: string[];
  cta?: string;
} {
  const result: { headline?: string; body?: string; features?: string[]; cta?: string } = {};
  
  const h2Match = content.match(/H2:\s*([\s\S]+?)(?:\s+Body:|\s+Feature|\s+CTA:|$)/);
  const htmlMatch = content.match(/HTML\s*<br>\s*([\s\S]+?)(?:\s+Body:|\s+Feature|\s+CTA:|$)/);
  const bodyMatch = content.match(/Body:\s*([\s\S]+?)(?:\s+Feature|\s+CTA:|$)/);
  const ctaMatch = content.match(/CTA:\s*([\s\S]+?)$/);
  
  if (h2Match) {
    result.headline = h2Match[1].trim();
  } else if (htmlMatch) {
    result.headline = htmlMatch[1].trim();
  }
  
  if (bodyMatch) {
    result.body = bodyMatch[1].trim();
  }
  
  const features: string[] = [];
  const featureRegex = /Feature\s*\d*:\s*([\s\S]+?)(?=Feature\s*\d*:|CTA:|$)/g;
  let featureMatch;
  while ((featureMatch = featureRegex.exec(content)) !== null) {
    features.push(featureMatch[1].trim());
  }
  if (features.length > 0) {
    result.features = features;
  }
  
  if (ctaMatch) {
    result.cta = ctaMatch[1].trim();
  }
  
  return result;
}

export function parseCTAContent(content: string): {
  headline?: string;
  cta?: string;
} {
  const result: { headline?: string; cta?: string } = {};
  
  const h2Match = content.match(/(?:H2|Section Headline):\s*([\s\S]+?)(?:\s+CTA:|$)/);
  const ctaMatch = content.match(/CTA:\s*([\s\S]+?)$/);
  
  if (h2Match) {
    result.headline = h2Match[1].trim();
  }
  
  if (ctaMatch) {
    result.cta = ctaMatch[1].trim();
  }
  
  return result;
}

export default {
  contentRegistry,
  getPageContent,
  getSectionContent,
  getAllSections,
  parseHeroContent,
  parseFeatureContent,
  parseCTAContent,
};
