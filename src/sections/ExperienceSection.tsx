import { Card, CardContent, Container, Stack, Typography } from '@mui/material';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="h2" id="experience-title">
                Experience
              </Typography>
              <Stack spacing={1.5}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">
                    Senior Frontend Engineer — Product Platform
                  </Typography>
                  <Typography color="text.secondary">2021 — Present · B2B SaaS</Typography>
                </Stack>
                <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                  <Typography component="li">
                    Led migration to a unified component library, reducing UI regressions and
                    duplications.
                  </Typography>
                  <Typography component="li">
                    Designed reusable patterns for tables, filters, and forms used across 6 teams.
                  </Typography>
                  <Typography component="li">
                    Improved performance on key dashboards by optimizing rendering and data
                    loading.
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={1.5}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">Frontend Engineer — Analytics Suite</Typography>
                  <Typography color="text.secondary">2018 — 2021 · FinTech</Typography>
                </Stack>
                <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                  <Typography component="li">
                    Built modular dashboards with customizable widgets and role-based views.
                  </Typography>
                  <Typography component="li">
                    Partnered with design to deliver accessible UI and consistent typography.
                  </Typography>
                  <Typography component="li">
                    Introduced documentation standards and onboarding guides for the frontend team.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
