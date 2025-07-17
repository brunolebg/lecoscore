import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  
  &::before {
    content: '📷';
    font-size: 3rem;
    opacity: 0.3;
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductName = styled.h3`
  font-family: 'Righteous', cursive;
  color: #333;
  margin-bottom: 10px;
  font-size: 1.3rem;
`;

const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF6B6B;
  margin-bottom: 15px;
`;

const PreorderButton = styled.button`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-family: 'Righteous', cursive;
  color: #FF6B6B;
  margin-bottom: 20px;
  text-align: center;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CancelButton = styled.button`
  background: #ccc;
  color: #333;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  
  &:hover {
    background: #bbb;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(45deg, #96CEB4, #45B7D1);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePreorder = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Récupérer les précommandes existantes
    const existingPreorders = JSON.parse(localStorage.getItem('preorders') || '[]');
    
    // Ajouter la nouvelle précommande
    const newPreorder = {
      id: Date.now(),
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      customerName: name,
      customerEmail: email,
      date: new Date().toISOString(),
      category: product.category
    };
    
    existingPreorders.push(newPreorder);
    localStorage.setItem('preorders', JSON.stringify(existingPreorders));
    
    setShowSuccess(true);
    setEmail('');
    setName('');
    
    setTimeout(() => {
      setShowSuccess(false);
      setShowModal(false);
    }, 2000);
  };

  const handleCancel = () => {
    setShowModal(false);
    setEmail('');
    setName('');
    setShowSuccess(false);
  };

  return (
    <>
      <Card>
        <ProductImage>
          <div>Image du produit</div>
        </ProductImage>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price}</ProductPrice>
          <PreorderButton onClick={handlePreorder}>
            Précommander
          </PreorderButton>
        </ProductInfo>
      </Card>

      {showModal && (
        <Modal onClick={handleCancel}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Précommande - {product.name}</ModalTitle>
            
            {showSuccess && (
              <SuccessMessage>
                Merci ! Nous vous recontacterons bientôt ! 🌊
              </SuccessMessage>
            )}
            
            {!showSuccess && (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Votre nom :</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Votre nom"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Votre email :</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="votre@email.com"
                  />
                </FormGroup>
                
                <ButtonGroup>
                  <SubmitButton type="submit">
                    Confirmer la précommande
                  </SubmitButton>
                  <CancelButton type="button" onClick={handleCancel}>
                    Annuler
                  </CancelButton>
                </ButtonGroup>
              </form>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ProductCard;