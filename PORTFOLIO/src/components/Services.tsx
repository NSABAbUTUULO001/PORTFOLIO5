import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #00e913ff 0%, #1a5303ff 100% );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #000000ff 0%, #050505ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #ffffffff;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: rgba(255, 238, 0, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #1bf507ff 0%, #030303ff 100%);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const ServiceTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000ff;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #ffffffff;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ffffffff;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #000000ff;
    font-weight: bold;
  }
`;

const ServicePrice = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #0c0c0eff;
  margin-bottom: 1rem;
`;

const ServiceButton = styled.button`
  background: linear-gradient(135deg, #00fa21ff 0%, #000000ff 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(252, 252, 252, 1);
  }
`;

const ProcessSection = styled.div`
  margin-top: 6rem;
`;

const ProcessTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #030303ff;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled.div`
  text-align: center;
  position: relative;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00fa21ff 0%, #000000ff 100% );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 1);
`;

const StepTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #000000ff;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #ffffffff;
  line-height: 1.6;
`;

const CallToAction = styled.div`
  background: rgba(118, 75, 162, 0.1);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  border: 1px solid rgba(118, 75, 162, 0.2);
`;

const CTATitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #020202ff;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #ffffffff;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #00fa21ff 0%, #000000ff 100% );
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 1);
  }
`;

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Create stunning user interfaces and exceptional user experiences that engage and convert your audience.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Responsive Design",
        "Usability Testing",
        "Design System Creation"
      ],
      price: "Starting at $2,500"
    },
    {
      icon: "🪙",
      title: "Token Creation",
      description: "Develop custom tokens with advanced features, tokenomics, and smart contract implementation.",
      features: [
        "ERC-20/BEP-20 Tokens",
        "Custom Tokenomics",
        "Smart Contract Development",
        "Security Auditing",
        "Deployment & Verification",
        "Documentation & Support"
      ],
      price: "Starting at $3,000"
    },
    {
      icon: "🎭",
      title: "NFT Development",
      description: "Create unique NFT collections with smart contracts, metadata, and marketplace integration.",
      features: [
        "NFT Smart Contracts",
        "Metadata Generation",
        "Rarity & Traits System",
        "Marketplace Integration",
        "Minting Platform",
        "IPFS Storage Setup"
      ],
      price: "Starting at $4,000"
    },
    {
      icon: "⚡",
      title: "dApps Development",
      description: "Build full-featured decentralized applications with modern frameworks and blockchain integration.",
      features: [
        "Frontend Development",
        "Smart Contract Integration",
        "Wallet Connectivity",
        "Web3 Implementation",
        "Testing & Deployment",
        "Maintenance & Updates"
      ],
      price: "Starting at $18,000"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We discuss your vision, requirements, and goals to create a detailed project roadmap."
    },
    {
      number: "02",
      title: "Development",
      description: "Build your project using cutting-edge technologies and best practices."
    },
    {
      number: "03",
      title: "Testing & Launch",
      description: "Thorough testing, optimization, and deployment to ensure perfect functionality."
    },
    {
      number: "04",
      title: "Support",
      description: "Ongoing maintenance, updates, and support to keep your project running smoothly."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle>MY SERVICES</SectionTitle>
        <SectionDescription>
          Professional services tailored to bring your digital vision to life through cutting-edge design and Web3 technologies.
        </SectionDescription>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
              <ServicePrice>{service.price}</ServicePrice>
              <ServiceButton onClick={scrollToContact}>Get Started</ServiceButton>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ProcessSection>
          <ProcessTitle>MY PROCESS</ProcessTitle>
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </ProcessSection>

        <CallToAction>
          <CTATitle>READY TO START YOUR PROJECT?</CTATitle>
          <CTADescription>
            Let's collaborate to create something amazing together. Whether it's a stunning UI/UX design, 
            custom tokens, NFT collection, or a complete dApp, I'm here to help bring your vision to life.
          </CTADescription>
          <CTAButton onClick={scrollToContact}>Let's Discuss Your Project</CTAButton>
        </CallToAction>
      </Container>
    </ServicesSection>
  );
};

export default Services;