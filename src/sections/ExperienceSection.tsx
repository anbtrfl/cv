import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';

const cardSx = {
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    borderColor: 'secondary.main',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="experience-title">
          Experience
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
                  <Typography variant="subtitle1">
                    Senior Frontend Engineer · Product Platform
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    2021 — Present
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Led UI platform work for a multi-team SaaS suite, building shared components,
                  navigation patterns, and theming primitives for consistent delivery.
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip label="Design system" size="small" variant="outlined" />
                  <Chip label="Performance" size="small" variant="outlined" />
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
                  <Typography variant="subtitle1">Frontend Engineer · Analytics Suite</Typography>
                  <Typography color="text.secondary" variant="caption">
                    2018 — 2021
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Built data-heavy dashboards with configurable widgets, improving clarity for
                  finance and operations teams while keeping interfaces fast.
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip label="Data viz" size="small" variant="outlined" />
                  <Chip label="Role-based UI" size="small" variant="outlined" />
                  <Chip label="Design ops" size="small" variant="outlined" />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </section>
  );
}
