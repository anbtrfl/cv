import { Box, Button, IconButton, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_STORAGE_KEY } from '../i18n';

type SectionLink = {
  id: string;
  label: string;
};

type SidebarProps = {
  sections: SectionLink[];
  activeSectionId: string;
  onSectionSelect?: (sectionId: string) => void;
};

export default function Sidebar({ sections, activeSectionId, onSectionSelect }: SidebarProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
  const isRussian = currentLanguage?.startsWith('ru');
  const navLetterSpacing = isRussian ? '0.16em' : '0.3em';
  const email = 'razanovae250@gmail.com';
  const githubUrl = 'https://github.com/anbtrfl';
  const telegramUrl = 'https://t.me/anbtrfl';
  const resumeUrl = 'https://anbtrfl.ru/Ekaterina_Ryazanova_CV.pdf';
  const firstName = t('sidebar.firstName');
  const lastName = t('sidebar.lastName');
  const resumeLabel = t('sidebar.fullResume');

  const socialLinks = [
    {
      label: t('sidebar.social.email'),
      href: `mailto:${email}`,
      icon: (
        <SvgIcon viewBox="0 0 24 24" fontSize="small">
          <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 4.8 8-4.8V7H4zm16 10V9.1l-7.5 4.5a1 1 0 0 1-1 0L4 9.1V17h16z" />
        </SvgIcon>
      ),
    },
    {
      label: t('sidebar.social.github'),
      href: githubUrl,
      icon: (
        <SvgIcon viewBox="0 0 24 24" fontSize="small">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.19-3.35-1.19-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.54 2.36 1.1 2.94.85.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.35 4.68-4.59 4.93.36.31.69.93.69 1.88v2.79c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
        </SvgIcon>
      ),
    },
    {
      label: t('sidebar.social.telegram'),
      href: telegramUrl,
      icon: (
        <SvgIcon viewBox="0 0 27 27" fontSize="small">
          <path d="M21.5 3.5a1.1 1.1 0 0 1 1.47 1.26l-3.3 15.55a1.6 1.6 0 0 1-2.31 1.07l-4.6-2.33-2.22 2.13c-.2.2-.54.06-.54-.22v-3.25l8.86-8.02c.2-.18-.04-.48-.28-.33l-11.04 6.98-4.56-1.45a1 1 0 0 1-.05-1.9z" />
        </SvgIcon>
      ),
    },
  ];

  const languageButtonSx = (isActive: boolean) => ({
    minWidth: 44,
    fontWeight: 600,
    fontSize: '0.7rem',
    letterSpacing: '0.18em',
    borderColor: isActive ? 'secondary.main' : 'divider',
    color: isActive ? 'background.default' : 'text.secondary',
    bgcolor: isActive ? 'secondary.main' : 'transparent',
    '&:hover': {
      bgcolor: isActive ? 'secondary.main' : 'rgba(100, 255, 218, 0.12)',
      borderColor: 'secondary.main',
    },
  });

  const handleLanguageChange = (language: 'en' | 'ru') => {
    i18n.changeLanguage(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  };

  return (
    <Stack spacing={4}>
      <Box>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            columnGap: 1.6,
            rowGap: 0.6,
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              flex: "0 0 auto",
              maxWidth: "100%",
              fontSize: { xs: "2.4rem", sm: "2.8rem", lg: "3.2rem" },
              fontWeight: 900,
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              color: "white",
              wordBreak: "keep-all",
              hyphens: "auto",
            }}
          >
            {firstName}
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flex: "0 0 auto",
              maxWidth: "100%",
              fontSize: { xs: "2.4rem", sm: "2.8rem", lg: "2.4rem" },
              fontWeight: 400,
              letterSpacing: { xs: "0.1em", sm: "0.1em", lg: "auto" },
              color: "white",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
          >
            {lastName}
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ mt: 1, color: "secondary.main" }}>
          {t("sidebar.role")}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: "text.secondary",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {t("sidebar.summary")}
        </Typography>
        <Link
          component="a"
          href={resumeUrl}
          aria-label={resumeLabel}
          target="_blank"
          rel="noreferrer"
          sx={{
            mt: 2.5,
            display: "inline-flex",
            alignItems: "center",
            gap: 0,
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "text.secondary",
            transition: "color 0.2s ease, text-shadow 0.2s ease",
            "& svg": {
              transition: "transform 0.2s ease",
            },
            "&:hover": {
              color: "secondary.main",
              textShadow: "0 0 12px rgba(100, 255, 218, 0.6)",
            },
            "&:hover svg": {
              transform: "translate(2px, -2px)",
            },
          }}
        >
          {resumeLabel}
          <SvgIcon viewBox="0 0 36 36" fontSize="small">
            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
          </SvgIcon>
        </Link>
      </Box>

      <Stack
        component="nav"
        spacing={1.5}
        aria-label="Section navigation"
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        {sections.map((section) => {
          const isActive = section.id === activeSectionId;

          return (
            <Link
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => onSectionSelect?.(section.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textTransform: "uppercase",
                letterSpacing: navLetterSpacing,
                fontSize: "0.68rem",
                lineHeight: 1.4,
                whiteSpace: "normal",
                wordBreak: "break-word",
                color: isActive ? "secondary.main" : "text.secondary",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  height: "1px",
                  width: isActive ? 48 : 28,
                  bgcolor: isActive ? "secondary.main" : "divider",
                  transition: "width 0.2s ease, background-color 0.2s ease",
                }}
              />
              {section.label}
            </Link>
          );
        })}
      </Stack>

      <Stack spacing={1.5}>
        {/* <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.2em' }}>
          {t('sidebar.language.label')}
        </Typography> */}
        <Stack direction="row" spacing={1}>
          <Button
            type="button"
            variant="outlined"
            aria-label={t("sidebar.language.switchToEnglish")}
            aria-pressed={!isRussian}
            onClick={() => handleLanguageChange("en")}
            sx={languageButtonSx(!isRussian)}
          >
            EN
          </Button>
          <Button
            type="button"
            variant="outlined"
            aria-label={t("sidebar.language.switchToRussian")}
            aria-pressed={isRussian}
            onClick={() => handleLanguageChange("ru")}
            sx={languageButtonSx(isRussian)}
          >
            RU
          </Button>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="center">
        {socialLinks.map((link) => (
          <IconButton
            key={link.label}
            component="a"
            href={link.href}
            aria-label={link.label}
            size="small"
            sx={{
              color: "text.secondary",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": {
                color: "secondary.main",
                borderColor: "secondary.main",
              },
            }}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.icon}
          </IconButton>
        ))}
      </Stack>
    </Stack>
  );
}
