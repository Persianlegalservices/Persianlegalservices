// LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // زبان جدید را اعمال می‌کند
  };

  return (
    <div>
      <h1>{t('welcome')}</h1> {/* ترجمه کلید 'welcome' */}
      <button onClick={() => changeLanguage('en')}>🇬🇧 EN</button>
      <button onClick={() => changeLanguage('fa')}>🇮🇷 FA</button>
    </div>
  );
};

export default LanguageSwitcher;
