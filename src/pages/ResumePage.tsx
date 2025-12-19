import { Box, Stack } from '@mui/material';
import AboutSection from '../sections/AboutSection';
import ContactsSection from '../sections/ContactsSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import FooterSection from '../sections/FooterSection';
import HeaderSection from '../sections/HeaderSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

export default function ResumePage() {
  return (
    <Box component="main" className="page">
      <Stack spacing={3}>
        <HeaderSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactsSection />
        <FooterSection />
      </Stack>
    </Box>
  );
}
