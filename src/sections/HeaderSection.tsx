import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function HeaderSection() {
  const { t, i18n } = useTranslation();
  const isRussian = i18n.resolvedLanguage?.startsWith('ru');
  const overlineLetterSpacing = isRussian ? '0.2em' : '0.35em';

  return (
    <section id="header" className="section" aria-labelledby="header-title">
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="overline" color="secondary" sx={{ letterSpacing: overlineLetterSpacing }}>
              {t('sections.header.overline')}
            </Typography>
            <Typography variant="h2" id="header-title">
              {t('sections.header.title')}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {t('sections.header.summary')}
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              <Chip
                label={t('sections.header.chips.designSystems')}
                size="small"
                variant="outlined"
                color="secondary"
              />
              <Chip
                label={t('sections.header.chips.accessibility')}
                size="small"
                variant="outlined"
                color="secondary"
              />
              <Chip
                label={t('sections.header.chips.productUx')}
                size="small"
                variant="outlined"
                color="secondary"
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </section>
  );
}
