import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #00e913ff 0%, #000000ff 100% );
  padding: 4rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection1 = styled.div``;

const FooterLogo = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #130e0eff 0%, #000000ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #ffffffff;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #08fc00ff;
  text-decoration: none;
  font-size: 1.2rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(30, 255, 0, 1);
    border-color: rgba(0, 0, 0, 1);
    transform: translateY(-2px);
    color: #ffffffff;
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled.a`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #ffffffff;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #48ff00ff;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ffffffff;
`;

const ContactIcon = styled.span`
  margin-right: 0.8rem;
  font-size: 1rem;
`;

const NewsletterSection = styled.div``;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffffffff;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #666;
  }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(135deg, #00ff22ff 0%, #000000ff 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(247, 247, 247, 1);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(250, 249, 249, 1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterBottomLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #fffefeff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #47b127ff;
  }
`;

const CallToAction = styled.div`
  background: rgba(102, 126, 234, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  border: 1px solid rgba(32, 175, 39, 1);
`;

const CTATitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const CTAText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #fff8f8ff;
  margin-bottom: 1.5rem;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #31f700ff 0%, #000000ff 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 254, 254, 1);
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <FooterSection>
      <Container>
        <CallToAction>
          <CTATitle>Ready to Start Your Project?</CTATitle>
          <CTAText>
            Let's create something amazing together. Get in touch and let's discuss your vision.
          </CTAText>
          <CTAButton onClick={() => scrollToSection('contact')}>
            Start a Project
          </CTAButton>
        </CallToAction>

        <FooterContent>
          <FooterSection1>
            <FooterLogo>MELBERK.LLC</FooterLogo>
            <FooterDescription>
              UI/UX Designer, Tokens Creator, NFT Creator, and dApps Developer. 
              Passionate about creating exceptional digital experiences in the Web3 space.
            </FooterDescription>
            <SocialIcons>
              <SocialIcon href="https://linkedin.com/in/BU-2LO" target="_blank" rel="noopener noreferrer">
                💼
              </SocialIcon>
              <SocialIcon href="https://twitter.com/abdul_malik" target="_blank" rel="noopener noreferrer">
                🐦
              </SocialIcon>
              <SocialIcon href="https://github.com/BU-2LO" target="_blank" rel="noopener noreferrer">
                💻
              </SocialIcon>
              <SocialIcon href="https://dribbble.com/BU-2LO" target="_blank" rel="noopener noreferrer">
                🏀
              </SocialIcon>
            </SocialIcons>
          </FooterSection1>

          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <FooterLink onClick={() => scrollToSection('home')}>Home</FooterLink>
            <FooterLink onClick={() => scrollToSection('about')}>About</FooterLink>
            <FooterLink onClick={() => scrollToSection('skills')}>Skills</FooterLink>
            <FooterLink onClick={() => scrollToSection('portfolio')}>Portfolio</FooterLink>
            <FooterLink onClick={() => scrollToSection('services')}>Services</FooterLink>
            <FooterLink onClick={() => scrollToSection('contact')}>Contact</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterLink>UI/UX Design</FooterLink>
            <FooterLink>Token Creation</FooterLink>
            <FooterLink>NFT Development</FooterLink>
            <FooterLink>dApps Development</FooterLink>
            <FooterLink>Web3 Consulting</FooterLink>
            <FooterLink>Design Systems</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Contact Info</ColumnTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>📧</ContactIcon>
                ugx_solana@icloud.com
              </ContactItem>
              <ContactItem>
                <ContactIcon>📱</ContactIcon>
                +256 763345995
              </ContactItem>
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                Available Worldwide
              </ContactItem>
              <ContactItem>
                <ContactIcon>⏰</ContactIcon>
                24h Response Time
              </ContactItem>
            </ContactInfo>
          </FooterColumn>

          <NewsletterSection>
            <ColumnTitle>Stay Updated</ColumnTitle>
            <FooterDescription>
              Subscribe to get the latest updates on Web3 trends, design insights, and project launches.
            </FooterDescription>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput 
                type="email" 
                placeholder="Enter your email"
                required
              />
              <NewsletterButton type="submit">
                Subscribe
              </NewsletterButton>
            </NewsletterForm>
          </NewsletterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} MELBERK. All rights reserved.
          </Copyright>
          <FooterLinks>
            <FooterBottomLink href="#privacy">Privacy Policy</FooterBottomLink>
            <FooterBottomLink href="#terms">Terms of Service</FooterBottomLink>
            <FooterBottomLink href="#sitemap">Sitemap</FooterBottomLink>
          </FooterLinks>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;