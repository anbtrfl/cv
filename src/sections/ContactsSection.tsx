import { Card, CardContent, Link, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ContactsSection() {
  const { t } = useTranslation();
  const email = 'razanovae250@gmail.com';
  const phone = '+7 919 508-79-76';
  const phoneHref = 'tel:+79195087976';
  const githubUrl = 'https://github.com/anbtrfl';
  const githubLabel = 'github.com/anbtrfl';
  const telegramUrl = 'https://t.me/anbtrfl';
  const telegramLabel = '@anbtrfl';

  return (
    <section id="contacts" className="section" aria-labelledby="contacts-title">
      <Stack spacing={2}>
        <Typography id="contacts-title" className="section-title">
          {t('sections.contacts.title')}
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={1.5}>
              <Typography className="section-title-card" aria-hidden="true">
                {t('sections.contacts.title')}
              </Typography>
              <Stack
                component="address"
                spacing={1}
                sx={{ fontStyle: 'normal', wordBreak: 'break-word', hyphens: 'auto' }}
              >
                <Typography color="text.secondary" variant="body2">
                  {t('sections.contacts.emailLabel')}: <Link href={`mailto:${email}`}>{email}</Link>
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.contacts.phoneLabel')}: <Link href={phoneHref}>{phone}</Link>
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.contacts.githubLabel')}:{' '}
                  <Link href={githubUrl} target="_blank" rel="noreferrer">
                    {githubLabel}
                  </Link>
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.contacts.telegramLabel')}:{' '}
                  <Link href={telegramUrl} target="_blank" rel="noreferrer">
                    {telegramLabel}
                  </Link>
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t('sections.contacts.locationLabel')}: {t('sections.contacts.locationValue')}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </section>
  );
}
