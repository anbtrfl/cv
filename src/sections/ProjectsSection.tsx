import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';

const cardSx = {
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    borderColor: 'secondary.main',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="projects-title">
          Projects
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
                  <Typography variant="subtitle1">Insight Dashboard</Typography>
                  <Typography color="text.secondary" variant="caption">
                    2024
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Modular analytics interface with reusable filters, chart primitives, and export
                  flows tailored for operations teams.
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip label="React" size="small" variant="outlined" />
                  <Chip label="TypeScript" size="small" variant="outlined" />
                  <Chip label="REST APIs" size="small" variant="outlined" />
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
                  <Typography variant="subtitle1">Design System Starter</Typography>
                  <Typography color="text.secondary" variant="caption">
                    2023
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Component library foundation with tokens, accessible patterns, and documentation
                  templates for fast onboarding.
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip label="UI kit" size="small" variant="outlined" />
                  <Chip label="Docs" size="small" variant="outlined" />
                  <Chip label="Accessibility" size="small" variant="outlined" />
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
                  <Typography variant="subtitle1">Workflow Builder</Typography>
                  <Typography color="text.secondary" variant="caption">
                    2022
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Visual editor for multi-step automation flows, featuring validation states and
                  stakeholder-ready previews.
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip label="Drag and drop" size="small" variant="outlined" />
                  <Chip label="UX flows" size="small" variant="outlined" />
                  <Chip label="Collaboration" size="small" variant="outlined" />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </section>
  );
}
