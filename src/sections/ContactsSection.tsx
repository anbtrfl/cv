import { Card, CardContent, Container, Link, Stack, Typography } from '@mui/material';

export default function ContactsSection() {
  return (
    <section id="contacts" className="section" aria-labelledby="contacts-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h2" id="contacts-title">
                Contacts
              </Typography>
              <Stack component="address" spacing={0.5} sx={{ fontStyle: 'normal' }}>
                <Typography>
                  Email:{' '}
                  <Link href="mailto:hello@example.com">hello@example.com</Link>
                </Typography>
                <Typography>
                  Portfolio:{' '}
                  <Link href="https://example.com" target="_blank" rel="noreferrer">
                    example.com
                  </Link>
                </Typography>
                <Typography>
                  GitHub:{' '}
                  <Link href="https://github.com/username" target="_blank" rel="noreferrer">
                    github.com/username
                  </Link>
                </Typography>
                <Typography>
                  LinkedIn:{' '}
                  <Link href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
                    linkedin.com/in/username
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
