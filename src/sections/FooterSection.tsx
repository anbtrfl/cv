import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function FooterSection() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="section" aria-labelledby="footer-title">
      <Stack spacing={2}>
        <Typography variant="h2" id="footer-title" className="section-title">
          {t('sections.footer.title')}
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={1}>
              <Typography className="section-title-card" aria-hidden="true">
                {t('sections.footer.title')}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.footer.body1')}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {t('sections.footer.body2')}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </footer>
  );
}
