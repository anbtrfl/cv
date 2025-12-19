import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export default function SkillsSection() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="skills-title">
          Skills
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="subtitle1">Frontend</Typography>
                <Typography color="text.secondary" variant="body2">
                  React 18, TypeScript, Vite, component architecture, state patterns.
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Semantic HTML, accessibility-first UI, responsive layouts.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="subtitle1">Workflow</Typography>
                <Typography color="text.secondary" variant="body2">
                  API integration, data modeling, form orchestration, documentation.
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Testing mindset, code reviews, design collaboration.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </section>
  );
}
