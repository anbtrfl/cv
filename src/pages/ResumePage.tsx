import { Box, Container, Stack } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import AboutSection from '../sections/AboutSection';
import ContactsSection from '../sections/ContactsSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import FooterSection from '../sections/FooterSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

export default function ResumePage() {
  const { t, i18n } = useTranslation();
  const sections = useMemo(
    () => [
      { id: 'about', label: t('navigation.about') },
      { id: 'experience', label: t('navigation.experience') },
      { id: 'projects', label: t('navigation.projects') },
      { id: 'education', label: t('navigation.education') },
      { id: 'skills', label: t('navigation.skills') },
    ],
    [i18n.language, t]
  );
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
  const scrollLockRef = useRef<{ targetId: string; expiresAt: number } | null>(null);

  const handleSectionSelect = (sectionId: string) => {
    const lockDurationMs = 2000;
    scrollLockRef.current = { targetId: sectionId, expiresAt: Date.now() + lockDurationMs };
    setActiveSectionId(sectionId);
  };

  useEffect(() => {
    const observedSections = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (observedSections.length === 0) {
      return;
    }

    const scrollOffset = 120;
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + scrollOffset;
      const scrollLock = scrollLockRef.current;
      if (scrollLock?.targetId) {
        const targetSection = observedSections.find(
          (section) => section.id === scrollLock.targetId
        );
        if (!targetSection) {
          scrollLockRef.current = null;
        } else {
          const targetTop = targetSection.offsetTop;
          const targetBottom = targetTop + targetSection.offsetHeight;
          const hasReachedTarget =
            scrollPosition >= targetTop && scrollPosition <= targetBottom;

          if (!hasReachedTarget && Date.now() < scrollLock.expiresAt) {
            return;
          }
          scrollLockRef.current = null;
        }
      }

      let currentSectionId = observedSections[0].id;

      for (const section of observedSections) {
        if (section.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }

      setActiveSectionId((current) =>
            current === currentSectionId ? current : currentSectionId
          );
    };

    let isTicking = false;
    const handleScroll = () => {
      if (isTicking) {
        return;
      }
      isTicking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        isTicking = false;
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections]);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <a href="#content" className="skip-link">
        {t("actions.skipToContent")}
      </a>
      <Container maxWidth="lg" sx={{ py: { xs: 6, lg: 10 } }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 6, lg: 12 }}
          alignItems={{ xs: 'stretch', lg: 'flex-start' }}
        >
          <Box sx={{ width: { xs: "100%", lg: 280 }, flexShrink: 0 }}>
            <Box
              sx={{
                position: { lg: "fixed" },
                top: { lg: 80 },
                width: { lg: 280 },
              }}
            >
              <Sidebar
                sections={sections}
                activeSectionId={activeSectionId}
                onSectionSelect={handleSectionSelect}
              />
            </Box>
          </Box>
          <Box
            component="main"
            id="content"
            tabIndex={-1}
            sx={{ flex: 1, maxWidth: { lg: 760 } }}
          >
            <Stack spacing={6}>
              {/*<HeaderSection />*/}
              <Box>
                <Box className="sticky-blur" aria-hidden="true" />
                <Stack spacing={6} className="sticky-blur-content">
                  <AboutSection />
                  <ExperienceSection />
                  <ProjectsSection />
                  <EducationSection />
                  <SkillsSection />
                  <ContactsSection />
                  <FooterSection />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
