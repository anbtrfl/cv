import { Box, Button, Container, Stack, Tooltip, Typography } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import AboutSection from '../sections/AboutSection';
import ContactsSection from '../sections/ContactsSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import FooterSection from '../sections/FooterSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import sticker from '../sticker.webp';
import contractPdf from '../ДОГОВОР.pdf';

export default function ResumePage() {
  const { t, i18n } = useTranslation();
  const [contentVisible] = useState(false);
  const [showGateModal, setShowGateModal] = useState(false);
  const [gateState, setGateState] = useState<'question' | 'reject' | 'accepted'>(
    'question'
  );
  const [showGateError, setShowGateError] = useState(false);
  const [stickerPosition, setStickerPosition] = useState({ x: 24, y: 24 });
  const stickerPositionRef = useRef(stickerPosition);
  const stickerSize = 180;
  const stickerPadding = 24;
  const stickerRepelDistance = 180;
  const modalDelayMs = 5000;
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

  useEffect(() => {
    stickerPositionRef.current = stickerPosition;
  }, [stickerPosition]);

  useEffect(() => {
    const modalTimer = window.setTimeout(() => {
      setShowGateModal(true);
    }, modalDelayMs);

    return () => {
      window.clearTimeout(modalTimer);
    };
  }, [modalDelayMs]);

  useEffect(() => {
    if (gateState !== 'reject') {
      return;
    }

    const rejectTimer = window.setTimeout(() => {
      setGateState('question');
      setShowGateError(true);
    }, 3000);

    return () => {
      window.clearTimeout(rejectTimer);
    };
  }, [gateState]);

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

  const handlePrankMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (showGateModal) {
      return;
    }
    const { x, y } = stickerPositionRef.current;
    const centerX = x + stickerSize / 2;
    const centerY = y + stickerSize / 2;
    const dx = centerX - event.clientX;
    const dy = centerY - event.clientY;
    const distance = Math.hypot(dx, dy);

    if (distance > stickerRepelDistance) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const maxX = Math.max(stickerPadding, width - stickerSize - stickerPadding);
    const maxY = Math.max(stickerPadding, height - stickerSize - stickerPadding);
    const safeDistance = Math.max(distance, 1);
    const normX = distance < 1 ? 1 : dx / safeDistance;
    const normY = distance < 1 ? 0 : dy / safeDistance;
    const targetCenterX = event.clientX + normX * stickerRepelDistance;
    const targetCenterY = event.clientY + normY * stickerRepelDistance;
    const nextX = Math.min(maxX, Math.max(stickerPadding, targetCenterX - stickerSize / 2));
    const nextY = Math.min(maxY, Math.max(stickerPadding, targetCenterY - stickerSize / 2));

    setStickerPosition({ x: nextX, y: nextY });
  };

  const handleAnswerYes = () => {
    setGateState('accepted');
    setShowGateError(false);
  };

  const handleAnswerNo = () => {
    setGateState('reject');
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {!contentVisible && (
        <Box
          onMouseMove={handlePrankMouseMove}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1400,
            background:
              'radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.08), transparent 60%), rgba(5, 8, 15, 0.92)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: 2, sm: 4 },
            '@keyframes sticker-pop': {
              '0%': { transform: 'scale(0.6) rotate(-6deg)' },
              '100%': { transform: 'scale(1) rotate(0deg)' },
            },
            '@keyframes modal-pop': {
              '0%': { opacity: 0, transform: 'scale(0.92)' },
              '100%': { opacity: 1, transform: 'scale(1)' },
            },
            '@keyframes reject-pulse': {
              '0%': { transform: 'scale(0.85)', opacity: 0.55 },
              '50%': { transform: 'scale(1.02)', opacity: 1 },
              '100%': { transform: 'scale(0.9)', opacity: 0.7 },
            },
            '@keyframes yes-pulse': {
              '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(77, 199, 86, 0.4)' },
              '50%': { transform: 'scale(1.04)', boxShadow: '0 0 16px rgba(77, 199, 86, 0.55)' },
              '100%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(77, 199, 86, 0.4)' },
            },
            '@keyframes petition-blink': {
              '0%': { transform: 'scale(1)', filter: 'hue-rotate(0deg)' },
              '50%': { transform: 'scale(1.06)', filter: 'hue-rotate(90deg)' },
              '100%': { transform: 'scale(1)', filter: 'hue-rotate(180deg)' },
            },
          }}
        >
          {!showGateModal && (
            <Box
              component="img"
              src={sticker}
              alt="sticker"
              sx={{
                position: 'fixed',
                left: stickerPosition.x,
                top: stickerPosition.y,
                width: stickerSize,
                height: 'auto',
                transition: 'left 0.22s ease, top 0.22s ease',
                animation: 'sticker-pop 0.4s ease',
                transformOrigin: 'center',
                filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.4))',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
          )}
          {showGateModal && gateState === 'reject' ? (
            <Typography
              component="div"
              sx={{
                color: '#ff2b2b',
                fontSize: { xs: '3.2rem', sm: '5rem', md: '7rem' },
                fontWeight: 800,
                letterSpacing: '0.07em',
                textShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                animation: 'reject-pulse 0.6s ease-in-out infinite',
                textAlign: 'center',
                px: 2,
              }}
            >
              ты паганец
            </Typography>
          ) : showGateModal ? (
            <Box
              role="dialog"
              aria-modal="true"
              aria-labelledby="academy-question"
              sx={{
                width: { xs: '100%', sm: 480 },
                maxWidth: 560,
                background: 'rgba(10, 14, 22, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 28px 70px rgba(0, 0, 0, 0.5)',
                px: { xs: 3, sm: 4 },
                py: { xs: 3.5, sm: 4.5 },
                textAlign: 'center',
                animation: 'modal-pop 0.4s ease',
              }}
            >
              <Stack spacing={2.5} alignItems="center">
                {showGateError && (
                  <Typography
                    sx={{
                      color: '#ff2b2b',
                      letterSpacing: '0.2em',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                    }}
                  >
                    неверный ответ
                  </Typography>
                )}
                <Typography
                  id="academy-question"
                  sx={{
                    color: '#f7f1e5',
                    fontSize: { xs: '1.6rem', sm: '2.1rem' },
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                  }}
                >
                  ты разрешишь академ?
                </Typography>
                {gateState === 'accepted' ? (
                  <Stack spacing={2} alignItems="center">
                    <Typography
                      sx={{
                        color: '#f5c542',
                        fontSize: { xs: '1.1rem', sm: '1.3rem' },
                        fontWeight: 600,
                        letterSpacing: '0.03em',
                      }}
                    >
                      ну ладно ,так бы и сразу
                    </Typography>
                    <Button
                      component="a"
                      href={contractPdf}
                      target="_blank"
                      rel="noreferrer"
                      variant="outlined"
                      sx={{
                        borderColor: '#ff00aa',
                        color: '#00ff6a',
                        background: 'linear-gradient(90deg, #ffee00, #ff00aa)',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        px: 3,
                        py: 1,
                        textShadow: '0 0 8px rgba(255, 0, 170, 0.7)',
                        animation: 'petition-blink 0.55s steps(1, end) infinite',
                        '&:hover': {
                          borderColor: '#00ff6a',
                          color: '#ff00aa',
                          background: 'linear-gradient(90deg, #00ff6a, #00aaff)',
                        },
                      }}
                    >
                      ПОДПИШИТЕ ПЕТИЦИЮ
                    </Button>
                  </Stack>
                ) : (
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    sx={{ width: '100%' }}
                  >
                    <Button
                      onClick={handleAnswerYes}
                      variant="contained"
                      sx={{
                        flex: 1,
                        background: '#4dc756',
                        color: '#0d1a12',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        py: 1.2,
                        animation: 'yes-pulse 1.4s ease-in-out infinite',
                        '&:hover': {
                          background: '#64dd6e',
                        },
                      }}
                    >
                      да
                    </Button>
                    <Tooltip title="ПОДУМАЙ" arrow placement="bottom">
                      <Button
                        onClick={handleAnswerNo}
                        variant="outlined"
                        sx={{
                          flex: { xs: 1, sm: 'unset' },
                          minWidth: { sm: 120 },
                          borderColor: '#ff2b2b',
                          color: '#ff2b2b',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          letterSpacing: '0.08em',
                          py: 0.9,
                          '&:hover': {
                            borderColor: '#ff4a4a',
                            background: 'rgba(255, 43, 43, 0.08)',
                          },
                        }}
                      >
                        нет
                      </Button>
                    </Tooltip>
                  </Stack>
                )}
              </Stack>
            </Box>
          ) : null}
        </Box>
      )}
      {contentVisible && (
        <>
          <a href="#content" className="skip-link">
            {t('actions.skipToContent')}
          </a>
          <Container maxWidth="lg" sx={{ py: { xs: 6, lg: 10 } }}>
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
        </>
      )}
    </Box>
  );
}
