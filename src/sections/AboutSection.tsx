import { Card, CardContent, Container, Stack, Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h2" id="about-title">
                About
              </Typography>
              <Typography>
                Frontend engineer with experience in SaaS products, enterprise dashboards, and
                internal platforms. Focused on maintainable architecture, accessibility, and
                performance.
              </Typography>
              <Typography>
                Comfortable collaborating with design and backend teams to ship cohesive
                experiences, from discovery to production support.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
