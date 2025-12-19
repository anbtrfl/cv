import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';

export default function HeaderSection() {
  return (
    <section id="header" className="section" aria-labelledby="header-title">
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="overline" color="secondary" sx={{ letterSpacing: '0.35em' }}>
              Profile
            </Typography>
            <Typography variant="h2" id="header-title">
              Overview
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Frontend engineer focused on accessible UI systems, thoughtful product flows, and
              clean component APIs that scale across teams.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              <Chip label="Design systems" size="small" variant="outlined" color="secondary" />
              <Chip label="Accessibility" size="small" variant="outlined" color="secondary" />
              <Chip label="Product UX" size="small" variant="outlined" color="secondary" />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </section>
  );
}
