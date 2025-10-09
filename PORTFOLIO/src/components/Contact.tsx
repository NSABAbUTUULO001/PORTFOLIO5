import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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
  background: linear-gradient(135deg, #000000ff 0%, #020202ff 100%);
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  background: rgba(102, 126, 234, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(102, 126, 234, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InfoTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(15, 247, 46, 1);
    border-color: rgba(31, 192, 39, 1);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #15ff00ff 0%, #000000ff 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #000000ff;
  margin-bottom: 0.3rem;
`;

const ContactValue = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #ffffffff;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(118, 75, 162, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(118, 75, 162, 0.2);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 0, 1);
    border-color: rgba(0, 255, 13, 1);
    transform: translateY(-2px);
  }
`;

const SocialIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 0.8rem;
`;

const SocialName = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ffffffff;
  font-weight: 500;
`;

const ContactForm = styled.form`
  background: rgba(102, 126, 234, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(102, 126, 234, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffffff;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #fffdfdff;
  margin-bottom: 0.5rem;
  display: block;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #ffffffff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4ed134ff;
    background: rgba(54, 197, 35, 1);
  }

  &::placeholder {
    color: #666;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5ece32ff;
    background: rgba(40, 179, 35, 1);
  }

  &::placeholder {
    color: #666;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1bac46ff;
    background: rgba(102, 126, 234, 0.1);
  }

  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #33ff00ff 0%, #000000ff 100%);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: rgba(46, 160, 67, 0.2);
  color: #4caf50;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid rgba(76, 175, 80, 0.3);
`;

const ErrorMessage = styled.div`
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid rgba(244, 67, 54, 0.3);
`;

interface FormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ugx_solana@icloud.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+256 763345995'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Available Worldwide'
    },
    {
      icon: '⏰',
      label: 'Response Time',
      value: 'Within 24 Hours'
    }
  ];

  const socialLinks = [
    {
      name: 'whatsapp',
      icon: '💼',
      url: 'https://linkedin.com/in/BU-2LO'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/abdul_malik'
    },
    {
      name: 'Telegram community',
      icon: '💻',
      url: 'https://github.com/BU-2LO'
    },
    {
      name: 'Whop',
      icon: '🏀',
      url: 'https://dribbble.com/BU-2LO'
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>GET IN TOUCH</SectionTitle>
        <SectionDescription>
          Ready to start your next project? Let's discuss how we can work together to bring your vision to life.
        </SectionDescription>

        <ContactContent>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            
            {contactItems.map((item, index) => (
              <ContactItem key={index}>
                <ContactIcon>{item.icon}</ContactIcon>
                <ContactDetails>
                  <ContactLabel>{item.label}</ContactLabel>
                  <ContactValue>{item.value}</ContactValue>
                </ContactDetails>
              </ContactItem>
            ))}

            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <SocialIcon>{social.icon}</SocialIcon>
                  <SocialName>{social.name}</SocialName>
                </SocialLink>
              ))}
            </SocialLinks>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Send Me a Message</FormTitle>
            
            <FormGroup>
              <FormLabel htmlFor="name">Full Name *</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email Address *</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="service">Service Interest</FormLabel>
              <FormSelect
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">Select a service</option>
                <option value="uiux">UI/UX Design</option>
                <option value="tokens">Token Creation</option>
                <option value="nft">NFT Development</option>
                <option value="dapps">dApps Development</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="budget">Project Budget</FormLabel>
              <FormSelect
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              >
                <option value="">Select budget range</option>
                <option value="under5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="over50k">Over $50,000</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Project Details *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>

            {submitStatus === 'success' && (
              <SuccessMessage>
                Thank you for your message! I'll get back to you within 24 hours.
              </SuccessMessage>
            )}

            {submitStatus === 'error' && (
              <ErrorMessage>
                Something went wrong. Please try again or contact me directly via email.
              </ErrorMessage>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;