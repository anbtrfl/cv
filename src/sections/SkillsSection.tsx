import { Card, CardContent, Container, Stack, Typography } from '@mui/material';

export default function SkillsSection() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h2" id="skills-title">
                Skills
              </Typography>
              <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                <Typography component="li">
                  React, TypeScript, Vite, modern JavaScript
                </Typography>
                <Typography component="li">
                  UI architecture, component libraries, design systems
                </Typography>
                <Typography component="li">
                  Accessibility (WCAG), semantic HTML, keyboard navigation
                </Typography>
                <Typography component="li">
                  State management patterns, API integration, data fetching
                </Typography>
                <Typography component="li">
                  Testing mindset: unit, integration, visual review
                </Typography>
                <Typography component="li">CI/CD, code review, documentation</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
