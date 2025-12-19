import { Card, CardContent, Container, Stack, Typography } from '@mui/material';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h2" id="projects-title">
                Projects
              </Typography>
              <Stack spacing={1.5}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">Insight Dashboard</Typography>
                  <Typography color="text.secondary">
                    A modular analytics UI with reusable charts and filters.
                  </Typography>
                  <Typography color="text.secondary">React, TypeScript, REST APIs</Typography>
                </Stack>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">Design System Starter</Typography>
                  <Typography color="text.secondary">
                    A component library baseline with tokens, accessibility checks, and docs.
                  </Typography>
                  <Typography color="text.secondary">React, MUI, Storybook</Typography>
                </Stack>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">Workflow Builder</Typography>
                  <Typography color="text.secondary">
                    Visual editor for multi-step automation flows with validation rules.
                  </Typography>
                  <Typography color="text.secondary">React, TypeScript, DnD</Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
