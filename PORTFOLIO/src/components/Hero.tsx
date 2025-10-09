import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #00ff37ff, #33ff00ff, #7de64cff, #0f3460);
  background-size: 400% 400%;
  background-attachment: fixed;
  animation: ${gradient} 15s ease infinite;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem 2rem 2rem; // <-- Add top padding (6rem ≈ 96px, adjust as needed)

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #000000ff 50%, #000000ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

const HeroSubtitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 400;
  color: #0c0f0cff;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const HeroDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #fffefeff;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const SkillTag = styled.span`
  background: rgba(87, 247, 24, 1);
  color: #fdfffdff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(11, 255, 11, 0.86);
  backdrop-filter: blur(10px);
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #09ff00ff 0%, #000000ff 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(3, 3, 3, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 1);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #ffffffff;
  border: 2px solid #ffffffff;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled.div<{ delay: number; x: number; y: number }>`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(53, 223, 53, 1), rgba(60, 224, 55, 1));
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TypingAnimation = styled.span`
  border-right: 2px solid #fafafaff;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { border-color: transparent; }
    51%, 100% { border-color: #ffffffff; }
  }
`;

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = ['UI/UX Designer', 'Tokens Creator', 'NFT Creator', 'dApps Developer'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[textIndex];
      
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <FloatingElements>
        <FloatingElement delay={0} x={10} y={20} />
        <FloatingElement delay={1} x={80} y={30} />
        <FloatingElement delay={2} x={20} y={70} />
        <FloatingElement delay={3} x={85} y={75} />
        <FloatingElement delay={1.5} x={50} y={15} />
        <FloatingElement delay={2.5} x={15} y={45} />
      </FloatingElements>
      
      <HeroContent>
        <HeroTitle>
          Hi, I'm BU-2LO
        </HeroTitle>
        
        <HeroSubtitle>
          <TypingAnimation>{currentText}</TypingAnimation>
        </HeroSubtitle>
        
        <HeroDescription>
          Passionate about creating exceptional digital experiences through innovative UI/UX design 
          and cutting-edge Web3 technologies. I specialize in building beautiful interfaces, 
          creating custom tokens, minting NFTs, and developing decentralized applications.
        </HeroDescription>
        
        <SkillTags>
          <SkillTag>UI/UX Design</SkillTag>
          <SkillTag>Token Creation</SkillTag>
          <SkillTag>NFT Development</SkillTag>
          <SkillTag>dApps</SkillTag>
          <SkillTag>Web3</SkillTag>
        </SkillTags>
        
        <CTAButtons>
          <PrimaryButton onClick={() => scrollToSection('portfolio')}>
            View My Work
          </PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection('contact')}>
            Let's Connect
          </SecondaryButton>
        </CTAButtons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;