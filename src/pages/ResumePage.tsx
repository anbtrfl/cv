import { Box, Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import AboutSection from '../sections/AboutSection';
import ContactsSection from '../sections/ContactsSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import FooterSection from '../sections/FooterSection';
import HeaderSection from '../sections/HeaderSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

const sections = [
  { id: 'header', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contacts', label: 'Contacts' },
  { id: 'footer', label: 'Footer' },
];

export default function ResumePage() {
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);

  useEffect(() => {
    const observedSections = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (observedSections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId((current) =>
              current === entry.target.id ? current : entry.target.id
            );
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 6, lg: 12 }}
          alignItems="flex-start"
        >
          <Box sx={{ width: { xs: '100%', lg: 280 }, flexShrink: 0 }}>
            <Box
              sx={{
                position: { lg: 'fixed' },
                top: { lg: 80 },
                width: { lg: 280 },
              }}
            >
              <Sidebar sections={sections} activeSectionId={activeSectionId} />
            </Box>
          </Box>
          <Box
            component="main"
            id="content"
            tabIndex={-1}
            sx={{ flex: 1, maxWidth: 760 }}
          >
            <Stack spacing={6}>
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
        </Stack>
      </Container>
    </Box>
  );
}
