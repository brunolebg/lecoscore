import React, { useState } from 'react';
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
  max-width: 800px;
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

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #FF6B6B;
    box-shadow: 0 0 10px rgba(255, 107, 107, 0.3);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #FF6B6B;
    box-shadow: 0 0 10px rgba(255, 107, 107, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #FF6B6B;
    box-shadow: 0 0 10px rgba(255, 107, 107, 0.3);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(45deg, #96CEB4, #45B7D1);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.2rem;
`;

const QuestionIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    favoriteExpression: '',
    marseillaisLevel: '',
    favoritePlace: '',
    sportNautique: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Sauvegarder le message dans le localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const newMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString()
    };
    messages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      favoriteExpression: '',
      marseillaisLevel: '',
      favoritePlace: '',
      sportNautique: '',
      message: ''
    });
    setIsSubmitting(false);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <PageContainer>
      <Container>
        <Card>
          <Title>💬 Contact 💬</Title>
          <Subtitle>Dites-nous tout ! On adore les histoires marseillaises</Subtitle>
          
          <InfoCard>
            <InfoTitle>🌊 Parlons ensemble ! 🌊</InfoTitle>
            <InfoText>
              Vous avez une question, une suggestion, ou vous voulez juste nous raconter votre dernière session de surf ? 
              N'hésitez pas ! Notre équipe de copains marseillais sera ravie de vous répondre.
            </InfoText>
            <InfoText>
              <strong>Promis, on répond à tous les messages !</strong> (Sauf si vous dites du mal de la bouillabaisse... 😉)
            </InfoText>
          </InfoCard>

          {showSuccess && (
            <SuccessMessage>
              🎉 Merci beaucoup ! Votre message a été envoyé avec succès ! 
              On vous répond dès qu'on a fini notre pastis ! 🍻
            </SuccessMessage>
          )}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                <QuestionIcon>👋</QuestionIcon>
                Comment vous appelez-vous ?
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom (ou votre surnom marseillais !)"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <QuestionIcon>📧</QuestionIcon>
                Votre email pour qu'on puisse vous répondre :
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <QuestionIcon>🗣️</QuestionIcon>
                Quelle est votre expression marseillaise préférée ?
              </Label>
              <Input
                type="text"
                name="favoriteExpression"
                value={formData.favoriteExpression}
                onChange={handleChange}
                placeholder="Ex: Putaing, c'est beau !"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <QuestionIcon>🏆</QuestionIcon>
                Quel est votre niveau de marseillais ?
              </Label>
              <Select
                name="marseillaisLevel"
                value={formData.marseillaisLevel}
                onChange={handleChange}
              >
                <option value="">Choisissez votre niveau</option>
                <option value="debutant">Débutant (je découvre)</option>
                <option value="amateur">Amateur (je connais quelques expressions)</option>
                <option value="confirme">Confirmé (je maîtrise l'accent)</option>
                <option value="expert">Expert (je suis un vrai fada !)</option>
                <option value="natif">Natif (je suis né à la Conception !)</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>
                <QuestionIcon>🏖️</QuestionIcon>
                Quel est votre endroit préféré à Marseille ?
              </Label>
              <Select
                name="favoritePlace"
                value={formData.favoritePlace}
                onChange={handleChange}
              >
                <option value="">Choisissez votre spot</option>
                <option value="vieux-port">Le Vieux-Port</option>
                <option value="notre-dame">Notre-Dame de la Garde</option>
                <option value="calanques">Les Calanques</option>
                <option value="corniche">La Corniche</option>
                <option value="panier">Le Panier</option>
                <option value="prado">Les plages du Prado</option>
                <option value="chateau-if">Le Château d'If</option>
                <option value="canebiere">La Canebière</option>
                <option value="autre">Autre (précisez dans le message)</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>
                <QuestionIcon>🏄‍♂️</QuestionIcon>
                Quel sport nautique vous fait vibrer ?
              </Label>
              <Select
                name="sportNautique"
                value={formData.sportNautique}
                onChange={handleChange}
              >
                <option value="">Choisissez votre passion</option>
                <option value="surf">Surf</option>
                <option value="planche-voile">Planche à voile</option>
                <option value="catamaran">Catamaran</option>
                <option value="kitesurf">Kitesurf</option>
                <option value="paddle">Paddle</option>
                <option value="voile">Voile</option>
                <option value="jetski">Jet-ski</option>
                <option value="plongee">Plongée</option>
                <option value="natation">Natation</option>
                <option value="aucun">Aucun (mais j'aime regarder !)</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>
                <QuestionIcon>💭</QuestionIcon>
                Votre message (racontez-nous tout !) :
              </Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message... N'hésitez pas à utiliser des expressions marseillaises ! On adore ça !"
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? '🚀 Envoi en cours...' : '🌊 Envoyer le message'}
            </SubmitButton>
          </form>

          <div style={{ marginTop: '40px', padding: '20px', background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', borderRadius: '15px', color: 'white' }}>
            <h3 style={{ fontFamily: 'Righteous, cursive', fontSize: '1.5rem', marginBottom: '15px', textAlign: 'center' }}>
              📞 Autres moyens de nous contacter
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
              <div>
                <h4 style={{ marginBottom: '10px' }}>📧 Email</h4>
                <p>contact@massilia-shop.com</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px' }}>📱 Réseaux sociaux</h4>
                <p>@MassiliaShop</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px' }}>🏢 Adresse</h4>
                <p>Quelque part sur la Canebière<br />13000 Marseille</p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default ContactPage;