import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #00e913ff 0%, #1a5303ff 100% );
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
  background: linear-gradient(135deg, #020101ff 0%, #000000ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled.div`
  background: rgba(255, 238, 0, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(102, 126, 234, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 253, 253, 1);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 1);
  }
`;

const CategoryTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000ff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CategoryIcon = styled.span`
  font-size: 1.8rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  background: rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const SkillName = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
`;

const SkillLevel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000ff;
`;

const ProgressBar = styled.div`
  background: rgba(44, 173, 18, 1);
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ width: number; animated: boolean }>`
  height: 100%;
  background: linear-gradient(90deg, #0e7703ff 0%, #188004ff 100%);
  border-radius: 3px;
  width: ${props => props.animated ? props.width : 0}%;
  transition: width 1.5s ease-out;
  box-shadow: 0 0 10px rgba(255, 255, 255, 1);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const TechCard = styled.div`
  background: rgba(50, 161, 46, 0.29 );
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 1);
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const TechName = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;
`;

const CertificationsSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const CertificationsTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #000000ff;
  margin-bottom: 2rem;
`;

const CertificationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled.div`
  background: rgba(50, 161, 46, 0.29);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(118, 75, 162, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 1);
  }
`;

const CertificationName = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fffcfcff;
  margin-bottom: 0.5rem;
`;

const CertificationProvider = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ffffffff;
`;

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryData {
  title: string;
  icon: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategoryData[] = [
    {
      title: "NFT & TOKENS",
      icon: "🎭",
      skills: [
        { name: "NFT Smart Contracts", level: 92 },
        { name: "Token Economics", level: 85 },
        { name: "Marketplace Integration", level: 88 },
        { name: "Metadata Standards", level: 90 },
        { name: "Collection Creation", level: 94 },
        { name: "Rarity Systems", level: 87 }
      ]
    },
    {
      title: "FRONTEND DEV",
      icon: "💻",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "CSS/SASS", level: 92 },
        { name: "JavaScript", level: 78 },
        { name: "HTML5", level: 95 },
        { name: "Responsive Design", level: 94 }
      ]
    },
    {
      title: "Web3 $ BLOCKCHAIN",
      icon: "⛓️",
      skills: [
        { name: "Rust", level: 85 },
        { name: "Smart Contracts", level: 90 },
        { name: "Web3.js", level: 82 },
        { name: "Wallet Integration", level: 90 },
        { name: "IPFS", level: 100 },
        { name: "DeFi Protocols", level: 98 }
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Figma", icon: "🎨" },
    { name: "TypeScript", icon: "📘" },
    { name: "Web3", icon: "🌐" },
    { name: "IPFS", icon: "📦" },
    { name: "Ethereum", icon: "💎" },
    { name: "Git", icon: "🔀" },
    { name: "PINATA", icon: "☁️" },
  ];

  const certifications = [
    { name: "Google UX Design Professional Certificate", provider: "Google" },
    { name: "Blockchain Developer Nanodegree", provider: "Udacity" },
    { name: "Advanced React Development", provider: "Meta" },
    { name: "Smart Contract Security", provider: "ConsenSys" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SkillsSection id="skills" ref={skillsRef}>
      <Container>
        <SectionTitle>SKILLS & EXPERTISE</SectionTitle>
        
        <SkillsContainer>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>
                <CategoryIcon>{category.icon}</CategoryIcon>
                {category.title}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillHeader>
                    <ProgressBar>
                      <ProgressFill width={skill.level} animated={animated} />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>

        <TechGrid>
          {technologies.map((tech, index) => (
            <TechCard key={index}>
              <TechIcon>{tech.icon}</TechIcon>
              <TechName>{tech.name}</TechName>
            </TechCard>
          ))}
        </TechGrid>

        <CertificationsSection>
          <CertificationsTitle>CERTIFICATIONS $ LEARNING</CertificationsTitle>
          <CertificationsList>
            {certifications.map((cert, index) => (
              <CertificationCard key={index}>
                <CertificationName>{cert.name}</CertificationName>
                <CertificationProvider>{cert.provider}</CertificationProvider>
              </CertificationCard>
            ))}
          </CertificationsList>
        </CertificationsSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills;