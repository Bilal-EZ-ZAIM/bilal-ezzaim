import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from './ui/button';

export function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);

    interface Language {
        code: string;
        name: string;
        flag: string;
        dir: 'ltr' | 'rtl';
    }

    const languages: Language[] = [
        { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
        { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
        { code: 'ar', name: 'العربية', flag: '🇲🇦', dir: 'rtl' },
        { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' }
    ];

    const changeLanguage = (lng: string, dir: 'ltr' | 'rtl'): void => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = dir;
        setOpen(false);
    };

    return (
        <div className="relative">
            <Button
                aria-label={t("navigation.changeLanguage")}
                onClick={() => setOpen(!open)}
                variant="outline"
                className="rounded-full border-border/70 px-3 font-semibold shadow-none transition-colors hover:bg-muted"
            >
                {languages.find(lang => lang.code === i18n.language)?.flag}{" "}
                {i18n.language.toUpperCase()}
            </Button>

            {open && (
                <div className="absolute end-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code, lang.dir)}
                            className={`w-full rounded-lg px-3 py-2 text-left flex items-center gap-2 transition-colors hover:bg-muted ${i18n.language === lang.code ? "bg-muted font-bold text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            <span>{lang.flag}</span> {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
