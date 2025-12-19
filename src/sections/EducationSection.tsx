import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="education-title">
          {t('sections.education.title')}
        </Typography>
        <Stack spacing={2}>
          <Card variant="outlined" component="article">
            <CardContent>
              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography variant="subtitle1" sx={{ minWidth: 0 }}>
                    {t('sections.education.degree.title')}
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {t('sections.education.degree.period')}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.education.degree.summary')}
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <Card variant="outlined" component="article">
            <CardContent>
              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography variant="subtitle1" sx={{ minWidth: 0 }}>
                    {t('sections.education.courses.title')}
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {t('sections.education.courses.period')}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.education.courses.summary')}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </section>
  );
}
