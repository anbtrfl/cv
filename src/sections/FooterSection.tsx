import { Card, CardContent, Container, Stack, Typography } from '@mui/material';

export default function FooterSection() {
  return (
    <footer id="footer" className="section" aria-labelledby="footer-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="h2" id="footer-title">
                Footer
              </Typography>
              <Typography color="text.secondary">
                References available upon request. Open to remote and hybrid opportunities.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </footer>
  );
}
