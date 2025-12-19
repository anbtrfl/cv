import { Card, CardContent, Link, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ContactsSection() {
  const { t } = useTranslation();

  return (
    <section id="contacts" className="section" aria-labelledby="contacts-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="contacts-title">
          {t('sections.contacts.title')}
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Stack
              component="address"
              spacing={1}
              sx={{ fontStyle: 'normal', wordBreak: 'break-word', hyphens: 'auto' }}
            >
              <Typography color="text.secondary" variant="body2">
                {t('sections.contacts.emailLabel')}:{" "}
                <Link href="mailto:hello@example.com">hello@example.com</Link>
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.contacts.portfolioLabel')}:{' '}
                <Link href="https://example.com" target="_blank" rel="noreferrer">
                  example.com
                </Link>
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.contacts.githubLabel')}:{' '}
                <Link href="https://github.com/username" target="_blank" rel="noreferrer">
                  github.com/username
                </Link>
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.contacts.linkedinLabel')}:{' '}
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
