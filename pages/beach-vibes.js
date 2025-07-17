import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRandomExpression, getRandomExpressions } from '../data/expressions';

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
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
  color: #FF6B6B;
  text-shadow: 0 0 10px #FF6B6B;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #4ECDC4;
  margin-bottom: 40px;
  font-weight: bold;
`;

const GeneratorCard = styled.div`
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
  color: white;
  padding: 40px;
  border-radius: 20px;
  margin: 30px 0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const ExpressionDisplay = styled.div`
  font-size: 2.5rem;
  font-family: 'Righteous', cursive;
  margin: 30px 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const GenerateButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
  margin: 10px;
  
  &:hover {
    background: white;
    color: #FF6B6B;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const MultipleExpressionsCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  backdrop-filter: blur(10px);
`;

const ExpressionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ExpressionItem = styled.div`
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const AnimatedIcon = styled.div`
  font-size: 3rem;
  margin: 20px 0;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, #45B7D1, #96CEB4);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin: 30px 0;
  text-align: left;
`;

const InfoTitle = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const BeachVibesPage = () => {
  const [currentExpression, setCurrentExpression] = useState('');
  const [multipleExpressions, setMultipleExpressions] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setCurrentExpression(getRandomExpression());
    setMultipleExpressions(getRandomExpressions(6));
  }, []);

  const generateNewExpression = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentExpression(getRandomExpression());
      setIsAnimating(false);
    }, 200);
  };

  const generateMultipleExpressions = () => {
    setMultipleExpressions(getRandomExpressions(6));
  };

  return (
    <PageContainer>
      <Container>
        <Card>
          <Title>🏖️ Beach Vibes 🏖️</Title>
          <Subtitle>Générateur d'expressions marseillaises authentiques</Subtitle>
          
          <AnimatedIcon>🌊</AnimatedIcon>
          
          <GeneratorCard>
            <ExpressionDisplay className={isAnimating ? 'fade-out' : 'fade-in'}>
              {currentExpression}
            </ExpressionDisplay>
            
            <GenerateButton onClick={generateNewExpression}>
              🎲 Nouvelle Expression
            </GenerateButton>
          </GeneratorCard>

          <MultipleExpressionsCard>
            <h3 style={{ color: 'white', fontFamily: 'Righteous, cursive', fontSize: '1.5rem', marginBottom: '20px' }}>
              🌊 Pack d'expressions du jour 🌊
            </h3>
            
            <ExpressionsList>
              {multipleExpressions.map((expression, index) => (
                <ExpressionItem key={index}>
                  {expression}
                </ExpressionItem>
              ))}
            </ExpressionsList>
            
            <GenerateButton onClick={generateMultipleExpressions} style={{ marginTop: '20px' }}>
              🔄 Renouveler le Pack
            </GenerateButton>
          </MultipleExpressionsCard>

          <InfoCard>
            <InfoTitle>🏄‍♂️ Qu'est-ce que Beach Vibes ? 🏄‍♀️</InfoTitle>
            <InfoText>
              Beach Vibes, c'est notre façon de partager l'âme marseillaise avec le monde entier ! 
              Ce générateur d'expressions authentiques vous plonge dans l'ambiance unique de Marseille, 
              avec ses expressions colorées et son accent si particulier.
            </InfoText>
            <InfoText>
              Que vous soyez sur une plage de Californie, dans les rues de Tokyo ou au bord du lac Léman, 
              ces expressions vous ramèneront instantanément sur la Canebière ou sur les calanques !
            </InfoText>
            <InfoText>
              <strong>Conseil de pro :</strong> Utilisez ces expressions avec vos amis pour créer une ambiance 
              100% marseillaise, même à des milliers de kilomètres de la Bonne Mère !
            </InfoText>
          </InfoCard>

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#FF6B6B', fontFamily: 'Righteous, cursive', fontSize: '1.8rem', marginBottom: '20px' }}>
              🌟 Comment utiliser Beach Vibes ? 🌟
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(255, 107, 107, 0.1)', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ color: '#FF6B6B', marginBottom: '10px' }}>🎯 Pour briser la glace</h4>
                <p>Utilisez une expression marseillaise pour démarrer une conversation de façon originale !</p>
              </div>
              <div style={{ background: 'rgba(78, 205, 196, 0.1)', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ color: '#4ECDC4', marginBottom: '10px' }}>😂 Pour faire rire</h4>
                <p>Rien de mieux qu'un bon "Putaing !" pour détendre l'atmosphère !</p>
              </div>
              <div style={{ background: 'rgba(69, 183, 209, 0.1)', padding: '20px', borderRadius: '10px' }}>
                <h4 style={{ color: '#45B7D1', marginBottom: '10px' }}>🏖️ Pour l'ambiance</h4>
                <p>Créez une ambiance beach vibes authentique lors de vos soirées !</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', padding: '20px', background: 'linear-gradient(135deg, #96CEB4, #45B7D1)', borderRadius: '15px', color: 'white' }}>
            <h3 style={{ fontFamily: 'Righteous, cursive', fontSize: '1.5rem', marginBottom: '15px' }}>
              💡 Le saviez-vous ?
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Ces expressions sont issues de la vraie culture marseillaise ! Elles ont été collectées 
              auprès de vrais Marseillais et reflètent l'authenticité de l'accent et de l'humour local. 
              Chaque expression a sa propre histoire et son contexte d'utilisation !
            </p>
          </div>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default BeachVibesPage;