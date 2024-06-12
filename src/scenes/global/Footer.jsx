import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#333',
  color: '#fff',
  padding: theme.spacing(4, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(1, 0),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: '#ddd',
  },
}));

const Footer = () => {
  return (
    <FooterWrapper style={{ marginTop: '50px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a passionate team dedicated to bringing you the latest and greatest in soccer news, stats, and updates. Stay connected with us for all your soccer needs!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <FooterLink href="/" underline="none">Home</FooterLink>
            <br />
            <FooterLink href="/matches" underline="none">Matches</FooterLink>
            <br />
            <FooterLink href="/teams" underline="none">Teams</FooterLink>
            <br />
            <FooterLink href="/players" underline="none">Players</FooterLink>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent="center">
              <SocialIcon href="#" aria-label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Hunain Hyder. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
