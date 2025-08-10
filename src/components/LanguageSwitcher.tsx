import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from './ui/button';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
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
        { code: 'ar', name: 'العربية', flag: '🇲🇦', dir: 'rtl' }
    ];

    const changeLanguage = (lng: string, dir: 'ltr' | 'rtl'): void => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = dir;
        setOpen(false);
    };

    return (
        <div className="relative">
            <Button
                onClick={() => setOpen(!open)}
                variant="outline"
                className="ml-4 px-4 py-2 rounded-full font-semibold shadow-sm 
                           transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900"
            >
                {languages.find(lang => lang.code === i18n.language)?.flag}{" "}
                {i18n.language.toUpperCase()}
            </Button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code, lang.dir)}
                            className={`w-full text-left px-4 py-2 flex items-center gap-2  hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-black bg-white ${i18n.language === lang.code ? "bg-gray-100 dark:bg-gray-700 font-bold" : ""
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
