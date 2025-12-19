import { Card, CardContent, Stack, Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="about-title">
          About
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography color="text.secondary" variant="body2">
                Frontend developer with experience across SaaS platforms, analytics suites, and
                internal tools. Focused on reliable UI architecture and collaboration between
                product, design, and engineering.
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Interested in performance, accessibility, and building interfaces that feel calm,
                fast, and consistent for users.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </section>
  );
}
