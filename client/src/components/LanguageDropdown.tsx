import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "PT", label: "Português" },
  { code: "FR", label: "Français" },
];

export function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-1 h-9 px-3 rounded-lg border border-scheme-border bg-transparent hover-elevate active-elevate-2 transition-colors text-sm font-medium text-foreground"
        data-testid="button-language-dropdown"
      >
        {selectedLanguage}
        <MdKeyboardArrowDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            className="cursor-pointer"
            data-testid={`menu-item-${lang.code.toLowerCase()}`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
