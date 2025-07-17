import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/marseille-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-family: 'Righteous', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled.button`
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
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProductsSection = styled.section`
  padding: 80px 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 50px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const CategorySection = styled.div`
  margin-bottom: 80px;
`;

const CategoryTitle = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #FF6B6B;
  text-shadow: 0 0 10px #FF6B6B;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const WaveIcon = styled.div`
  font-size: 2rem;
  margin: 0 10px;
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    75% { transform: rotate(-10deg); }
  }
`;

const HomePage = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <WaveIcon>🌊</WaveIcon>
            MASSILIA SHOP
            <WaveIcon>🌊</WaveIcon>
          </HeroTitle>
          <HeroSubtitle>
            Les t-shirts et crop-tops aux couleurs de Marseille
            <br />
            Inspirés des sports nautiques et des années 80
          </HeroSubtitle>
          <HeroButton onClick={scrollToProducts}>
            Découvrir nos produits
          </HeroButton>
        </HeroContent>
      </HeroSection>

      <ProductsSection id="products">
        <Container>
          <SectionTitle>Nos Collections</SectionTitle>
          
          <CategorySection>
            <CategoryTitle>
              🏄‍♂️ {products.homme.title} 🏄‍♂️
            </CategoryTitle>
            <ProductGrid>
              {products.homme.items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </CategorySection>

          <CategorySection>
            <CategoryTitle>
              🏄‍♀️ {products.femme.title} 🏄‍♀️
            </CategoryTitle>
            <ProductGrid>
              {products.femme.items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </CategorySection>
        </Container>
      </ProductsSection>
    </>
  );
};

export default HomePage;