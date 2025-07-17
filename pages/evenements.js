import React, { useState, useEffect } from 'react';
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
  max-width: 1200px;
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

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #4ECDC4;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const EventCard = styled.div`
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
  color: white;
  padding: 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

const EventTitle = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const EventDate = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 0.9;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 15px;
  opacity: 0.9;
`;

const EventLocation = styled.div`
  font-size: 0.9rem;
  font-style: italic;
  opacity: 0.8;
`;

const LoadingCard = styled.div`
  background: linear-gradient(135deg, #45B7D1, #96CEB4);
  color: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  margin: 30px 0;
`;

const ErrorCard = styled.div`
  background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
  color: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  margin: 30px 0;
`;

const RefreshButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 20px;
  
  &:hover {
    background: white;
    color: #FF6B6B;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, #45B7D1, #96CEB4);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin: 30px 0;
  text-align: center;
`;

const InfoTitle = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const EvenementsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Données d'événements fictifs pour la démonstration
  const mockEvents = [
    {
      id: 1,
      title: "Festival de la Mer",
      date: "15 Juillet 2024",
      description: "Un festival célébrant la culture maritime marseillaise avec des concerts, des expositions et des dégustations de produits locaux.",
      location: "Vieux-Port, Marseille",
      url: "https://tarpin-bien.com/festival-mer"
    },
    {
      id: 2,
      title: "Compétition de Surf",
      date: "22 Juillet 2024",
      description: "Compétition de surf ouverte à tous les niveaux sur les plages marseillaises. Ambiance garantie !",
      location: "Plage du Prado, Marseille",
      url: "https://tarpin-bien.com/competition-surf"
    },
    {
      id: 3,
      title: "Soirée Années 80",
      date: "28 Juillet 2024",
      description: "Soirée rétro aux couleurs des années 80 avec DJ sets et animations. Venez en tenue d'époque !",
      location: "Palais du Pharo, Marseille",
      url: "https://tarpin-bien.com/soiree-80"
    },
    {
      id: 4,
      title: "Regata Marseillaise",
      date: "5 Août 2024",
      description: "Course de voiliers traditionnels dans la rade de Marseille. Spectacle magnifique garanti !",
      location: "Rade de Marseille",
      url: "https://tarpin-bien.com/regata"
    },
    {
      id: 5,
      title: "Beach Volley Tournament",
      date: "12 Août 2024",
      description: "Tournoi de beach volley ouvert à tous avec des prix à gagner et une ambiance de folie !",
      location: "Plage des Catalans, Marseille",
      url: "https://tarpin-bien.com/beach-volley"
    },
    {
      id: 6,
      title: "Fête de la Bouillabaisse",
      date: "19 Août 2024",
      description: "Célébration de la bouillabaisse traditionnelle avec les meilleurs chefs marseillais.",
      location: "Corniche Kennedy, Marseille",
      url: "https://tarpin-bien.com/bouillabaisse"
    }
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulation d'un appel API
      // Dans un vrai projet, on ferait un appel à l'API de tarpin-bien.com
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Pour la démonstration, on utilise des données fictives
      setEvents(mockEvents);
    } catch (err) {
      setError("Impossible de récupérer les événements pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  const openEventLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <PageContainer>
      <Container>
        <Card>
          <Title>🎉 Événements 🎉</Title>
          <Subtitle>Les 6 derniers événements de tarpin-bien.com</Subtitle>
          
          <InfoCard>
            <InfoTitle>🌊 Restez connectés ! 🌊</InfoTitle>
            <InfoText>
              Découvrez les événements les plus cool de Marseille et des environs ! 
              Ces événements sont automatiquement récupérés depuis tarpin-bien.com 
              pour vous tenir au courant de toute l'actualité marseillaise.
            </InfoText>
            <InfoText>
              <strong>Cliquez sur un événement</strong> pour en savoir plus et vous inscrire !
            </InfoText>
          </InfoCard>

          {loading && (
            <LoadingCard>
              <h3 style={{ fontFamily: 'Righteous, cursive', fontSize: '1.5rem', marginBottom: '15px' }}>
                🔄 Chargement des événements...
              </h3>
              <p>Récupération des derniers événements depuis tarpin-bien.com</p>
            </LoadingCard>
          )}

          {error && (
            <ErrorCard>
              <h3 style={{ fontFamily: 'Righteous, cursive', fontSize: '1.5rem', marginBottom: '15px' }}>
                ⚠️ Erreur de chargement
              </h3>
              <p>{error}</p>
              <RefreshButton onClick={fetchEvents}>
                🔄 Réessayer
              </RefreshButton>
            </ErrorCard>
          )}

          {!loading && !error && events.length > 0 && (
            <EventsGrid>
              {events.map((event) => (
                <EventCard key={event.id} onClick={() => openEventLink(event.url)}>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDate>📅 {event.date}</EventDate>
                  <EventDescription>{event.description}</EventDescription>
                  <EventLocation>📍 {event.location}</EventLocation>
                </EventCard>
              ))}
            </EventsGrid>
          )}

          {!loading && !error && events.length === 0 && (
            <InfoCard>
              <InfoTitle>🤔 Aucun événement trouvé</InfoTitle>
              <InfoText>
                Il n'y a pas d'événements disponibles pour le moment. 
                Revenez plus tard pour découvrir les prochains événements !
              </InfoText>
              <RefreshButton onClick={fetchEvents}>
                🔄 Actualiser
              </RefreshButton>
            </InfoCard>
          )}

          <div style={{ marginTop: '40px', padding: '20px', background: 'linear-gradient(135deg, #96CEB4, #45B7D1)', borderRadius: '15px', color: 'white' }}>
            <h3 style={{ fontFamily: 'Righteous, cursive', fontSize: '1.5rem', marginBottom: '15px', textAlign: 'center' }}>
              💡 À propos de tarpin-bien.com
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'center' }}>
              Tarpin-bien.com est LE site de référence pour tous les événements marseillais ! 
              Ils recensent les meilleures soirées, festivals, compétitions sportives et événements culturels 
              de la région. Un vrai trésor pour tous les amoureux de Marseille !
            </p>
          </div>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default EvenementsPage;