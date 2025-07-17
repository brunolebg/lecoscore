import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/marseille-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  margin: 20px 0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
  color: #FF6B6B;
  text-shadow: 0 0 10px #FF6B6B;
`;

const Subtitle = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 2rem;
  color: #4ECDC4;
  margin-bottom: 20px;
  text-align: center;
`;

const StoryText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 25px;
  text-align: justify;
`;

const Highlight = styled.span`
  color: #FF6B6B;
  font-weight: bold;
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 1.3rem;
  color: #4ECDC4;
  border-left: 4px solid #FF6B6B;
  padding-left: 20px;
  margin: 30px 0;
  background: rgba(255, 107, 107, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const IconSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const IconItem = styled.div`
  text-align: center;
  animation: float 3s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
  
  &:nth-child(4) {
    animation-delay: 1.5s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const ValuesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ValueCard = styled.div`
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueTitle = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ValueText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const HistoirePage = () => {
  return (
    <PageContainer>
      <Container>
        <Card>
          <Title>🌊 Notre Histoire 🌊</Title>
          
          <Subtitle>L'aventure commence...</Subtitle>
          
          <StoryText>
            Tout a commencé avec une <Highlight>bande de copains marseillais</Highlight> qui avaient dans le sang 
            l'amour de leur ville, de la mer et des sports nautiques. Passionnés de <Highlight>catamaran</Highlight>, 
            de <Highlight>surf</Highlight> et de <Highlight>planche à voile</Highlight>, ils vivaient pour ces moments 
            magiques où le mistral souffle et où la Méditerranée scintille sous le soleil.
          </StoryText>

          <IconSection>
            <IconItem>⛵</IconItem>
            <IconItem>🏄‍♂️</IconItem>
            <IconItem>🏄‍♀️</IconItem>
            <IconItem>🌊</IconItem>
          </IconSection>

          <StoryText>
            Mais la vie les a menés <Highlight>très loin de Marseille</Highlight>... Aux quatre coins du monde, 
            ils ont découvert de nouveaux horizons, de nouvelles cultures, de nouveaux océans. Pourtant, 
            au fil des années, une nostalgie profonde s'est installée dans leurs cœurs.
          </StoryText>

          <Quote>
            "Putaing, comme elle nous manque, notre belle Marseille avec ses couleurs vives, 
            sa vie enivrante et cette énergie unique qui nous animait !"
          </Quote>

          <StoryText>
            C'est alors qu'ils ont eu l'idée géniale : pourquoi ne pas <Highlight>ramener un peu de Marseille</Highlight> 
            partout où ils sont ? Ils ont décidé de créer des vêtements qui capturent l'essence même de leur ville natale, 
            avec ses <Highlight>couleurs éclatantes</Highlight>, son esprit <Highlight>années 80</Highlight> et cette 
            passion pour les sports nautiques qui les unit.
          </StoryText>

          <Subtitle>La naissance de Massilia Shop</Subtitle>

          <StoryText>
            Ainsi est né <Highlight>Massilia Shop</Highlight> ! Ils ont voulu créer des t-shirts et crop-tops 
            <Highlight>solides et résistants</Highlight>, capables de supporter les embruns, le soleil, et toutes 
            les aventures que la vie peut offrir. Chaque pièce est conçue avec amour, imprégnée de cette 
            <Highlight>âme marseillaise</Highlight> si particulière.
          </StoryText>

          <StoryText>
            Les noms de leurs créations ? Ils ne pouvaient être qu'en <Highlight>pur marseillais</Highlight> ! 
            "Le Massilia shirt", "Croc-le", "Re-mec", "Friou-cool" pour les hommes, et "Le Massilia-top", 
            "Croc-moi", "Re-meuf", "Corniche-on" pour les femmes. Chaque nom raconte une histoire, 
            évoque un souvenir, fait sourire ceux qui connaissent.
          </StoryText>

          <ValuesSection>
            <ValueCard>
              <ValueTitle>🏄‍♂️ Passion</ValueTitle>
              <ValueText>
                Notre amour pour les sports nautiques et Marseille guide chacune de nos créations
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueTitle>💪 Qualité</ValueTitle>
              <ValueText>
                Des vêtements solides et résistants, conçus pour durer et vous accompagner dans vos aventures
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueTitle>🌈 Authenticité</ValueTitle>
              <ValueText>
                Chaque pièce porte en elle l'âme marseillaise et l'esprit des années 80
              </ValueText>
            </ValueCard>
          </ValuesSection>

          <Quote>
            "Aujourd'hui, où que nous soyons dans le monde, nous portons un peu de Marseille avec nous. 
            Et nous espérons que vous aussi, vous ressentirez cette magie !"
          </Quote>

          <StoryText style={{ textAlign: 'center', fontSize: '1.5rem', color: '#FF6B6B', fontWeight: 'bold' }}>
            Allez, zou ! Rejoignez l'aventure Massilia Shop ! 🌊⛵🏄‍♂️
          </StoryText>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default HistoirePage;