import { Card, CardContent, Container, Stack, Typography } from '@mui/material';

export default function EducationSection() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h2" id="education-title">
                Education
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="subtitle1">B.Sc. in Computer Science</Typography>
                <Typography color="text.secondary">
                  2014 — 2018 · Focus on Human-Computer Interaction
                </Typography>
              </Stack>
              <Stack spacing={0.5}>
                <Typography variant="subtitle1">Professional Courses</Typography>
                <Typography color="text.secondary">
                  Web Performance, Accessible Design, Advanced TypeScript
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
