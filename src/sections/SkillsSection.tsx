import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function SkillsSection() {
  const { t } = useTranslation();
  const inlineLabelQuery = '@media (min-width: 750px) and (max-width: 1023.95px)';
  const renderChipRow = (chips: string[]) => (
    <Stack
      direction="row"
      spacing={1}
      useFlexGap
      flexWrap="wrap"
      sx={{
        flex: '1 1 0',
        minWidth: 0,
        [inlineLabelQuery]: {
          justifyContent: 'flex-end',
        },
      }}
    >
      {chips.map((chip) => (
        <Chip key={chip} label={chip} size="small" variant="outlined" />
      ))}
    </Stack>
  );
  const renderSkillGroup = (label: string, chips: string[]) => (
    <Stack
      spacing={1.5}
      useFlexGap
      sx={{
        flexDirection: 'column',
        [inlineLabelQuery]: {
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
        },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          flexShrink: 0,
          [inlineLabelQuery]: {
            whiteSpace: 'nowrap',
          },
        }}
      >
        {label}
      </Typography>
      {renderChipRow(chips)}
    </Stack>
  );

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
              {renderSkillGroup(t('sections.skills.core'), [
                t('sections.skills.coreBody1'),
                t('sections.skills.coreBody2'),
                t('sections.skills.coreBody3'),
                t('sections.skills.coreBody4'),
                t('sections.skills.coreBody5'),
                t('sections.skills.coreBody6'),
              ])}
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              {renderSkillGroup(t('sections.skills.ui'), [
                t('sections.skills.uiBody1'),
                t('sections.skills.uiBody2'),
                t('sections.skills.uiBody3'),
                t('sections.skills.uiBody4'),
                t('sections.skills.uiBody5'),
              ])}
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ gridColumn: { xs: 'auto', lg: '1 / -1' } }}>
            <CardContent>
              {renderSkillGroup(t('sections.skills.workflow'), [
                t('sections.skills.workflowBody1'),
                t('sections.skills.workflowBody2'),
                t('sections.skills.workflowBody3'),
                t('sections.skills.workflowBody4'),
                t('sections.skills.workflowBody5'),
                t('sections.skills.workflowBody6'),
              ])}
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </section>
  );
}
