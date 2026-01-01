import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const cardSx = {
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    borderColor: 'secondary.main',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
  },
};

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="projects-title" className="section-title">
          {t('sections.projects.title')}
        </Typography>
        <Stack spacing={2}>
          <Card variant="outlined" sx={cardSx} component="article">
            <CardContent>
              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography variant="subtitle1" sx={{ minWidth: 0 }}>
                    {t('sections.projects.project1.title')}
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {t('sections.projects.project1.period')}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                  {t('sections.projects.project1.summary')}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip
                    label={t('sections.projects.project1.chips.react')}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t('sections.projects.project1.chips.typescript')}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t('sections.projects.project1.chips.rest')}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card variant="outlined" sx={cardSx} component="article">
            <CardContent>
              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography variant="subtitle1" sx={{ minWidth: 0 }}>
                    {t('sections.projects.project2.title')}
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {t('sections.projects.project2.period')}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                  {t('sections.projects.project2.summary')}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip
                    label={t('sections.projects.project2.chips.uiKit')}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t('sections.projects.project2.chips.docs')}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t('sections.projects.project2.chips.accessibility')}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </section>
  );
}
