import { getSectionContent, parseHeroContent, parseFeatureContent, parseCTAContent } from '@/lib/contentParser';
import { VarH1, VarH2, VarP } from '@/components/VarText';
import { Button } from '@/components/ui/button';

export function HeroSectionFromCSV({ page, section }: { page: string; section: string }) {
  const content = getSectionContent(page, section);
  const parsed = parseHeroContent(content);
  
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="text-center">
          {parsed.headline && (
            <VarH1 html={parsed.headline} className="mb-5 md:mb-6" />
          )}
          
          {parsed.subheadline && (
            <p className="md:text-md mb-6 md:mb-8">{parsed.subheadline}</p>
          )}
          
          {parsed.cta && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" data-testid="button-cta-primary">
                {parsed.cta}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function FeatureSectionFromCSV({ page, section }: { page: string; section: string }) {
  const content = getSectionContent(page, section);
  const parsed = parseFeatureContent(content);
  
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          {parsed.headline && (
            <VarH2 html={parsed.headline} className="mb-5 md:mb-6" />
          )}
          
          {parsed.body && (
            <VarP html={parsed.body} className="md:text-md" />
          )}
        </div>
        
        {parsed.features && parsed.features.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {parsed.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <VarP html={feature} />
              </div>
            ))}
          </div>
        )}
        
        {parsed.cta && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-14">
            <Button size="lg" data-testid="button-cta-feature">
              {parsed.cta}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export function CTASectionFromCSV({ page, section }: { page: string; section: string }) {
  const content = getSectionContent(page, section);
  const parsed = parseCTAContent(content);
  
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-muted">
      <div className="container max-w-lg">
        <div className="text-center">
          {parsed.headline && (
            <VarH2 html={parsed.headline} className="mb-6 md:mb-8" />
          )}
          
          {parsed.cta && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" variant="default" data-testid="button-cta-section">
                {parsed.cta}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default {
  HeroSectionFromCSV,
  FeatureSectionFromCSV,
  CTASectionFromCSV,
};
