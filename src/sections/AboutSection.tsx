import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="about-title" className="section-title">
          {t('sections.about.title')}
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography color="text.secondary" variant="body2">
                {t('sections.about.body1')}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.about.body2')}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.about.body3')}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.about.body4')}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </section>
  );
}
