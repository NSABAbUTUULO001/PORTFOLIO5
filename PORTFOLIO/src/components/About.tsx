import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #00e913ff 0%, #1a5303ff 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #000000ff 0%, #000000ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled.div`
  color: #ffffff;
`;

const AboutParagraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #ffffffff;
`;

const Highlight = styled.span`
  color: #00ebd7ff;
  font-weight: 600;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  background: rgba(50, 161, 46, 0.29 );
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #00ffeaff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ffffffff;
  font-weight: 500;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #000000ff 0%, #00ff37ff 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 20px 40px rgba(254, 254, 255, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    background: #07080cff;
    border-radius: 50%;
  }

  &::after {
    content: 'AM';
    position: absolute;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    color: #00fa00ff;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    
    &::after {
      font-size: 3rem;
    }
  }
`;

const FloatingIcon = styled.div<{ top: string; left: string; delay: number }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 50px;
  height: 50px;
  background: rgba(86, 226, 81, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  border: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
`;

const ExperienceTimeline = styled.div`
  margin-top: 4rem;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 40px;
    bottom: -20px;
    width: 2px;
    background: linear-gradient(to bottom, #26b62dff, transparent);
  }

  &:last-child::before {
    display: none;
  }
`;

const TimelineDot = styled.div`
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #1eff00ff 0%, #000000ff 100%);
  border-radius: 50%;
  margin-right: 1.5rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 1);
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #050505ff;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #ffffffff;
  line-height: 1.6;
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>ABOUT ME</SectionTitle>
        
        <AboutContent>
          <AboutText>
            <AboutParagraph>
              Hello! I'm <Highlight>BU-2LO</Highlight>, a passionate digital creator specializing in 
              <Highlight> UI/UX design</Highlight> and <Highlight>Web3 technologies</Highlight>. 
              With a deep understanding of both traditional design principles and cutting-edge blockchain innovation, 
              I create digital experiences that are both beautiful and functional.
            </AboutParagraph>
            
            <AboutParagraph>
              My journey began with a fascination for design and evolved into expertise in 
              <Highlight> token creation</Highlight>, <Highlight>NFT development</Highlight>, 
              and <Highlight>decentralized applications</Highlight>. I believe in the power of 
              design to bridge the gap between complex technology and user-friendly experiences.
            </AboutParagraph>
            
            <AboutParagraph>
              I'm constantly exploring new technologies and design trends to deliver innovative solutions 
              that push the boundaries of what's possible in the digital realm. Whether it's crafting 
              intuitive user interfaces or building the next generation of blockchain applications, 
              I'm committed to excellence in every project.
            </AboutParagraph>

            <StatsContainer>
              <StatCard>
                <StatNumber>20+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>1.3+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>15+</StatNumber>
                <StatLabel>Happy Clients</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>100+</StatNumber>
                <StatLabel>NFTs Created</StatLabel>
              </StatCard>
            </StatsContainer>
          </AboutText>

          <ImageContainer>
            <ProfileImage />
            <FloatingIcon top="10%" left="20%" delay={0}>🎨</FloatingIcon>
            <FloatingIcon top="80%" left="10%" delay={1}>⚡</FloatingIcon>
            <FloatingIcon top="15%" left="80%" delay={2}>🔗</FloatingIcon>
            <FloatingIcon top="75%" left="85%" delay={1.5}>💎</FloatingIcon>
          </ImageContainer>
        </AboutContent>

        <ExperienceTimeline>
          <TimelineItem>
            <TimelineDot>🎯</TimelineDot>
            <TimelineContent>
              <TimelineTitle>UI/UX Design Mastery</TimelineTitle>
              <TimelineDescription>
                Specialized in creating intuitive and visually appealing user interfaces with a focus on 
                user experience optimization and modern design principles.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineDot>🪙</TimelineDot>
            <TimelineContent>
              <TimelineTitle>Token Creation Expertise</TimelineTitle>
              <TimelineDescription>
                Developed custom tokens and cryptocurrencies with advanced tokenomics, smart contract 
                implementation, and secure deployment on various blockchain networks.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineDot>🖼️</TimelineDot>
            <TimelineContent>
              <TimelineTitle>NFT Development</TimelineTitle>
              <TimelineDescription>
                Created unique NFT collections with custom metadata, smart contracts, and marketplace 
                integration, helping artists and brands enter the Web3 space.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineDot>⚡</TimelineDot>
            <TimelineContent>
              <TimelineTitle>dApps Development</TimelineTitle>
              <TimelineDescription>
                Built decentralized applications with modern frameworks, blockchain integration, and 
                seamless user experiences that bridge traditional web and Web3 technologies.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </ExperienceTimeline>
      </Container>
    </AboutSection>
  );
};

export default About;