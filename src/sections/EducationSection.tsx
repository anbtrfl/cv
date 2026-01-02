import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function EducationSection() {
  const { t } = useTranslation();
  const coursesSummary = t('sections.education.courses.summary');
  const courses = coursesSummary
    .split('·')
    .map((course) => course.trim())
    .filter(Boolean);

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <Stack spacing={2}>
        <Typography id="education-title" className="section-title">
          {t('sections.education.title')}
        </Typography>
        <Card variant="outlined" component="article">
          <CardContent>
            <Stack spacing={2}>
              <Typography className="section-title-card" aria-hidden="true">
                {t('sections.education.title')}
              </Typography>
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

              <Stack spacing={1.5}>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    width: '100%',
                    textAlign: 'center',
                    '&::after': {
                      content: '""',
                      flex: 1,
                      height: '1px',
                      backgroundColor: 'rgba(148, 163, 184, 0.35)',
                    },
                  }}
                >
                  {t('sections.education.courses.title')}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {courses.map((course) => (
                    <Chip key={course} label={course} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </section>
  );
}
