import React, { useState } from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #00e913ff 0%, #1a5303ff 100%);
  min-height: 100vh;
  width: 100vw;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: hidden;
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
  background: linear-gradient(135deg, #000000ff 0%, #000000ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #ffffffff;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #09ff00ff 0%, #000000ff 100%)' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#fafafaff'};
  border: 2px solid #ffffffff;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)' : 'rgba(255, 255, 255, 0.1)'};
    color: #32fc00ff;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ProjectCard = styled.div`
  background: rgba( 50, 161, 46, 0.29);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 1);
  }
`;

const ProjectImage = styled.div<{ bgColor: string }>`
  height: 200px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.1));
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #ffffffff;
  font-weight: 500;
  background: rgba(0, 240, 0, 1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  display: inline-block;
`;

const ProjectDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #ffffffff;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  background: rgba( 50, 161, 46, 0.29);
  color: #ffffff;
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.button`
  background: linear-gradient(135deg, #09ff00ff 0%, #000000ff 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 1);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled.div`
  background: rgba(50, 161, 46, 0.29 );
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(118, 75, 162, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 1);
  }
`;

const StatNumber = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffffff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const StatDescription = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #ffffffff;
`;

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  bgColor: string;
  type: 'uiux' | 'tokens' | 'nft' | 'dapps';
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "DeFi Trading Dashboard",
      category: "UI/UX Design",
      description: "Comprehensive trading interface for decentralized finance protocols with real-time analytics and intuitive user experience.",
      tags: ["React", "TypeScript", "Web3", "Charts"],
      image: "📊",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      type: "uiux"
    },
    {
      id: 2,
      title: "MELBERK Token",
      category: "Token Creation",
      description: "Custom ERC-20 utility token with advanced tokenomics, staking mechanisms, and governance features.",
      tags: ["Solidity", "ERC-20", "Governance", "Staking"],
      image: "🪙",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      type: "tokens"
    },
    {
      id: 3,
      title: "Digital Art Collection",
      category: "NFT Creation",
      description: "Limited edition NFT collection featuring unique digital artwork with dynamic metadata and rarity systems.",
      tags: ["NFT", "IPFS", "Metadata", "Smart Contracts"],
      image: "🎨",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      type: "nft"
    },
    {
      id: 4,
      title: "Decentralized Marketplace",
      category: "dApp Development",
      description: "Peer-to-peer marketplace for trading digital assets with integrated wallet connectivity and escrow system.",
      tags: ["React", "Web3.js", "Smart Contracts", "IPFS"],
      image: "🛒",
      bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      type: "dapps"
    },
    {
      id: 7,
      title: "Metaverse Avatar NFTs",
      category: "NFT Creation",
      description: "3D avatar NFT collection for metaverse platforms with customizable traits and utility features.",
      tags: ["3D", "Metaverse", "Traits", "Utility"],
      image: "👤/📱",
      bgColor: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      type: "nft"
    },
    {
      id: 8,
      title: "DAO Governance Platform",
      category: "dApp Development",
      description: "Decentralized autonomous organization platform with voting mechanisms and proposal management.",
      tags: ["DAO", "Governance", "Voting", "Web3"],
      image: "🏛️/🎮",
      bgColor: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
      type: "dapps"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'uiux', label: 'UI/UX Design' },
    { key: 'tokens', label: 'Tokens' },
    { key: 'nft', label: 'NFTs' },
    { key: 'dapps', label: 'dApps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const stats = [
    {
      number: "30+",
      label: "Projects Completed",
      description: "Successful deliveries across all categories"
    },
    {
      number: "100+",
      label: "NFTs Created",
      description: "Unique digital assets minted"
    },
    {
      number: "5+",
      label: "Tokens Deployed",
      description: "Custom tokens launched on blockchain"
    },
    {
      number: "15+",
      label: "dApps Built",
      description: "Decentralized applications developed"
    }
  ];

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionTitle>MY PORTFOLIO</SectionTitle>
        <SectionDescription>
          Explore my work across UI/UX design, token creation, NFT development, and decentralized applications.
          Each project represents innovation and excellence in the digital space.
        </SectionDescription>

        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter.key}
              active={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage bgColor={project.bgColor}>
                {project.image}
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink>View Details</ProjectLink>
                  <ProjectLink>Live Demo</ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsContainer>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;