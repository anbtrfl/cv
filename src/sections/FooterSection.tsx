import { Card, CardContent, Stack, Typography } from '@mui/material';

export default function FooterSection() {
  return (
    <footer id="footer" className="section" aria-labelledby="footer-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="footer-title">
          Footer
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="body2">
                References available upon request. Open to remote and hybrid opportunities.
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Built with React, TypeScript, and a focus on accessible UX.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </footer>
  );
}
