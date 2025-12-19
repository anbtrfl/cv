import { Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';

export default function HeaderSection() {
  return (
    <header id="top" className="section" aria-labelledby="header-title">
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Typography variant="h1" id="header-title">
                  Frontend Developer
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  React · TypeScript · Design Systems
                </Typography>
              </Stack>
              <Typography>
                Product-focused engineer building accessible, reliable interfaces and component
                libraries with clean APIs.
              </Typography>
              <Stack
                component="nav"
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                aria-label="Resume sections"
              >
                <Button href="#about">About</Button>
                <Button href="#skills">Skills</Button>
                <Button href="#experience">Experience</Button>
                <Button href="#education">Education</Button>
                <Button href="#projects">Projects</Button>
                <Button href="#contacts">Contacts</Button>
                <Button href="#footer">Footer</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </header>
  );
}
