import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const cardSx = {
  transition:
    'box-shadow 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
  },
};

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <Stack spacing={2}>
        <Typography
          variant="h2"
          id="experience-title"
          className="section-title"
        >
          {t("sections.experience.title")}
        </Typography>
        <Typography className="section-title-card" aria-hidden="true" sx={{ padding: 0, paddingLeft: 2 }}>
          {t("sections.experience.title")}
        </Typography>
        <Stack spacing={2}>
          <Card variant="outlined" sx={cardSx} component="article">
            <CardContent>
              <Stack spacing={1.5}>
                {/* <Typography className="section-title-card" aria-hidden="true">
                  {t('sections.experience.title')}
                </Typography> */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                >
                  <Typography variant="subtitle1" sx={{ minWidth: 0 }}>
                    {t("sections.experience.role1.title")}
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {t("sections.experience.role1.period")}
                  </Typography>
                </Stack>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ whiteSpace: "pre-line" }}
                >
                  {t("sections.experience.role1.summary")}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip
                    label={t("sections.experience.role1.chips.designSystem")}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t("sections.experience.role1.chips.performance")}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t("sections.experience.role1.chips.accessibility")}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card variant="outlined" sx={cardSx} component="article">
            <CardContent>
              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                >
                  <Typography variant="subtitle1" sx={{ minWidth: 0 }}>
                    {t("sections.experience.role2.title")}
                  </Typography>
                  <Typography color="text.secondary" variant="caption">
                    {t("sections.experience.role2.period")}
                  </Typography>
                </Stack>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ whiteSpace: "pre-line" }}
                >
                  {t("sections.experience.role2.summary")}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip
                    label={t("sections.experience.role2.chips.dataViz")}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t("sections.experience.role2.chips.roleBasedUi")}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={t("sections.experience.role2.chips.designOps")}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </section>
  );
}
