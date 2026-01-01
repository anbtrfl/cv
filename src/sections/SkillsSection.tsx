import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="skills-title" className="section-title">
          {t('sections.skills.title')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 2,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="subtitle1">{t('sections.skills.frontend')}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.skills.frontendBody1')}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.skills.frontendBody2')}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="subtitle1">{t('sections.skills.workflow')}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.skills.workflowBody1')}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.skills.workflowBody2')}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </section>
  );
}
