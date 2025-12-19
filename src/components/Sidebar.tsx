import { Box, IconButton, Link, Stack, SvgIcon, Typography } from '@mui/material';

type SectionLink = {
  id: string;
  label: string;
};

type SidebarProps = {
  sections: SectionLink[];
  activeSectionId: string;
};

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: (
      <SvgIcon viewBox="0 0 24 24" fontSize="small">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 4.8 8-4.8V7H4zm16 10V9.1l-7.5 4.5a1 1 0 0 1-1 0L4 9.1V17h16z" />
      </SvgIcon>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/username',
    icon: (
      <SvgIcon viewBox="0 0 24 24" fontSize="small">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.19-3.35-1.19-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.54 2.36 1.1 2.94.85.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.35 4.68-4.59 4.93.36.31.69.93.69 1.88v2.79c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
      </SvgIcon>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/username',
    icon: (
      <SvgIcon viewBox="0 0 24 24" fontSize="small">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.59 22 10.3 22 13.47V21h-4v-6.58c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V21h-4z" />
      </SvgIcon>
    ),
  },
];

export default function Sidebar({ sections, activeSectionId }: SidebarProps) {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.4em' }}>
          Resume
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, color: 'text.primary' }}>
          Candidate Name
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, color: 'text.secondary' }}>
          Frontend Developer
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
          Building calm, accessible interfaces and scalable UI systems for product teams.
        </Typography>
      </Box>

      <Stack component="nav" spacing={1.5} aria-label="Section navigation">
        {sections.map((section) => {
          const isActive = section.id === activeSectionId;

          return (
            <Link
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? 'true' : undefined}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                fontSize: '0.68rem',
                color: isActive ? 'secondary.main' : 'text.secondary',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'text.primary',
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  height: '1px',
                  width: isActive ? 48 : 28,
                  bgcolor: isActive ? 'secondary.main' : 'divider',
                  transition: 'width 0.2s ease, background-color 0.2s ease',
                }}
              />
              {section.label}
            </Link>
          );
        })}
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="center">
        {socialLinks.map((link) => (
          <IconButton
            key={link.label}
            component="a"
            href={link.href}
            aria-label={link.label}
            size="small"
            sx={{
              color: 'text.secondary',
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': {
                color: 'secondary.main',
                borderColor: 'secondary.main',
              },
            }}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.icon}
          </IconButton>
        ))}
      </Stack>
    </Stack>
  );
}
