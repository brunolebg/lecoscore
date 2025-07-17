import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllProducts } from '../data/products';

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

const LoginForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #FF6B6B;
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const LogoutButton = styled.button`
  background: linear-gradient(45deg, #FF6B6B, #FF8E8E);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  float: right;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ErrorMessage = styled.div`
  background: #FF6B6B;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #45B7D1, #96CEB4);
  color: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const TabsContainer = styled.div`
  margin-bottom: 30px;
`;

const TabButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(45deg, #FF6B6B, #4ECDC4)' : '#ddd'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
`;

const TableRow = styled.tr`
  &:hover {
    background: rgba(255, 107, 107, 0.1);
  }
`;

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('preorders');
  const [preorders, setPreorders] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà authentifié
    const authenticated = localStorage.getItem('adminAuthenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    // Charger les précommandes
    const savedPreorders = JSON.parse(localStorage.getItem('preorders') || '[]');
    setPreorders(savedPreorders);

    // Charger les messages de contact
    const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    setContactMessages(savedMessages);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "C'est qui" && password === "C'est moi") {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      loadData();
      setError('');
    } else {
      setError('Identifiants incorrects !');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    setUsername('');
    setPassword('');
  };

  const getProductStats = () => {
    const products = getAllProducts();
    const stats = products.map(product => {
      const productPreorders = preorders.filter(p => p.productId === product.id);
      return {
        ...product,
        preorderCount: productPreorders.length
      };
    });
    return stats;
  };

  const getTotalPreorders = () => preorders.length;
  const getTotalMessages = () => contactMessages.length;

  if (!isAuthenticated) {
    return (
      <PageContainer>
        <Container>
          <Card>
            <Title>🔐 Administration</Title>
            <LoginForm onSubmit={handleLogin}>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <FormGroup>
                <Label>Identifiant :</Label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="C'est qui"
                />
              </FormGroup>
              <FormGroup>
                <Label>Mot de passe :</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="C'est moi"
                />
              </FormGroup>
              <LoginButton type="submit">Se connecter</LoginButton>
            </LoginForm>
          </Card>
        </Container>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Container>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <Title>📊 Back Office</Title>
            <LogoutButton onClick={handleLogout}>Déconnexion</LogoutButton>
          </div>

          <StatsGrid>
            <StatCard>
              <StatNumber>{getTotalPreorders()}</StatNumber>
              <StatLabel>Précommandes totales</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{getTotalMessages()}</StatNumber>
              <StatLabel>Messages reçus</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{getProductStats().filter(p => p.preorderCount > 0).length}</StatNumber>
              <StatLabel>Produits précommandés</StatLabel>
            </StatCard>
          </StatsGrid>

          <TabsContainer>
            <TabButton 
              active={activeTab === 'preorders'} 
              onClick={() => setActiveTab('preorders')}
            >
              Précommandes
            </TabButton>
            <TabButton 
              active={activeTab === 'products'} 
              onClick={() => setActiveTab('products')}
            >
              Produits
            </TabButton>
            <TabButton 
              active={activeTab === 'messages'} 
              onClick={() => setActiveTab('messages')}
            >
              Messages
            </TabButton>
          </TabsContainer>

          {activeTab === 'preorders' && (
            <div>
              <h2 style={{ color: '#FF6B6B', marginBottom: '20px' }}>
                📋 Liste des précommandes ({preorders.length})
              </h2>
              {preorders.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>
                  Aucune précommande pour le moment.
                </p>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <TableHeader>Date</TableHeader>
                      <TableHeader>Produit</TableHeader>
                      <TableHeader>Prix</TableHeader>
                      <TableHeader>Nom</TableHeader>
                      <TableHeader>Email</TableHeader>
                      <TableHeader>Catégorie</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    {preorders.map((preorder) => (
                      <TableRow key={preorder.id}>
                        <TableCell>{new Date(preorder.date).toLocaleDateString()}</TableCell>
                        <TableCell>{preorder.productName}</TableCell>
                        <TableCell>{preorder.productPrice}</TableCell>
                        <TableCell>{preorder.customerName}</TableCell>
                        <TableCell>{preorder.customerEmail}</TableCell>
                        <TableCell>{preorder.category}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <h2 style={{ color: '#FF6B6B', marginBottom: '20px' }}>
                🎽 Statistiques par produit
              </h2>
              <Table>
                <thead>
                  <tr>
                    <TableHeader>Produit</TableHeader>
                    <TableHeader>Prix</TableHeader>
                    <TableHeader>Catégorie</TableHeader>
                    <TableHeader>Précommandes</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {getProductStats().map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <span style={{ 
                          background: product.preorderCount > 0 ? '#4ECDC4' : '#ddd',
                          color: product.preorderCount > 0 ? 'white' : '#666',
                          padding: '5px 10px',
                          borderRadius: '15px',
                          fontSize: '0.9rem'
                        }}>
                          {product.preorderCount}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 style={{ color: '#FF6B6B', marginBottom: '20px' }}>
                💬 Messages de contact ({contactMessages.length})
              </h2>
              {contactMessages.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>
                  Aucun message pour le moment.
                </p>
              ) : (
                <div style={{ display: 'grid', gap: '20px' }}>
                  {contactMessages.map((message) => (
                    <div key={message.id} style={{
                      background: 'linear-gradient(135deg, #45B7D1, #96CEB4)',
                      color: 'white',
                      padding: '20px',
                      borderRadius: '15px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <strong>{message.name}</strong>
                        <span>{new Date(message.date).toLocaleDateString()}</span>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        📧 {message.email}
                      </div>
                      {message.favoriteExpression && (
                        <div style={{ marginBottom: '10px' }}>
                          🗣️ Expression préférée: {message.favoriteExpression}
                        </div>
                      )}
                      {message.marseillaisLevel && (
                        <div style={{ marginBottom: '10px' }}>
                          🏆 Niveau: {message.marseillaisLevel}
                        </div>
                      )}
                      {message.favoritePlace && (
                        <div style={{ marginBottom: '10px' }}>
                          🏖️ Lieu préféré: {message.favoritePlace}
                        </div>
                      )}
                      {message.sportNautique && (
                        <div style={{ marginBottom: '10px' }}>
                          🏄‍♂️ Sport nautique: {message.sportNautique}
                        </div>
                      )}
                      <div style={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '15px',
                        borderRadius: '10px',
                        marginTop: '15px'
                      }}>
                        <strong>Message:</strong><br />
                        {message.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Card>
      </Container>
    </PageContainer>
  );
};

export default AdminPage;