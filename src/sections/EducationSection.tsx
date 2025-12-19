import { Card, CardContent, Stack, Typography } from '@mui/material';

export default function EducationSection() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="education-title">
          Education
        </Typography>
        <Stack spacing={2}>
          <Card variant="outlined" component="article">
            <CardContent>
              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography variant="subtitle1">B.Sc. in Computer Science</Typography>
                  <Typography color="text.secondary" variant="caption">
                    2014 — 2018
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Focus on human-computer interaction, software architecture, and applied
                  problem-solving.
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <Card variant="outlined" component="article">
            <CardContent>
              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography variant="subtitle1">Professional Courses</Typography>
                  <Typography color="text.secondary" variant="caption">
                    2019 — 2023
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Web performance, accessible design, advanced TypeScript practices.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </section>
  );
}
