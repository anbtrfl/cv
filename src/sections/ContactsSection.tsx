import { Card, CardContent, Link, Stack, Typography } from '@mui/material';

export default function ContactsSection() {
  return (
    <section id="contacts" className="section" aria-labelledby="contacts-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="contacts-title">
          Contacts
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Stack component="address" spacing={1} sx={{ fontStyle: 'normal' }}>
              <Typography color="text.secondary" variant="body2">
                Email: <Link href="mailto:hello@example.com">hello@example.com</Link>
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Portfolio:{' '}
                <Link href="https://example.com" target="_blank" rel="noreferrer">
                  example.com
                </Link>
              </Typography>
              <Typography color="text.secondary" variant="body2">
                GitHub:{' '}
                <Link href="https://github.com/username" target="_blank" rel="noreferrer">
                  github.com/username
                </Link>
              </Typography>
              <Typography color="text.secondary" variant="body2">
                LinkedIn:{' '}
                <Link href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
                  linkedin.com/in/username
                </Link>
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </section>
  );
}
