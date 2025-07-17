export const products = {
  homme: {
    title: "Le Fada",
    items: [
      {
        id: 1,
        name: "Le Massilia shirt",
        price: "29€",
        image: "/products/massilia-shirt.jpg",
        description: "T-shirt classique aux couleurs de Marseille, parfait pour les vrais fadoli !",
        category: "homme"
      },
      {
        id: 2,
        name: "Croc-le",
        price: "32€",
        image: "/products/croc-le.jpg",
        description: "Pour tous ceux qui aiment croquer la vie à pleines dents !",
        category: "homme"
      },
      {
        id: 3,
        name: "Re-mec",
        price: "28€",
        image: "/products/re-mec.jpg",
        description: "Le t-shirt qui fait dire 'Re-mec, tu es trop beau !'",
        category: "homme"
      },
      {
        id: 4,
        name: "Friou-cool",
        price: "35€",
        image: "/products/friou-cool.jpg",
        description: "Reste cool même quand il fait friou !",
        category: "homme"
      }
    ]
  },
  femme: {
    title: "La Gaté",
    items: [
      {
        id: 5,
        name: "Le Massilia-top",
        price: "26€",
        image: "/products/massilia-top.jpg",
        description: "Crop-top tendance pour les vraies gatées marseillaises !",
        category: "femme"
      },
      {
        id: 6,
        name: "Croc-moi",
        price: "29€",
        image: "/products/croc-moi.jpg",
        description: "Croque-moi si tu peux ! Le crop-top qui fait sensation.",
        category: "femme"
      },
      {
        id: 7,
        name: "Re-meuf",
        price: "27€",
        image: "/products/re-meuf.jpg",
        description: "Pour toutes les meufs qui ont du style !",
        category: "femme"
      },
      {
        id: 8,
        name: "Corniche-on",
        price: "31€",
        image: "/products/corniche-on.jpg",
        description: "Comme une balade sur la Corniche, mais en crop-top !",
        category: "femme"
      }
    ]
  }
};

export const getAllProducts = () => {
  return [...products.homme.items, ...products.femme.items];
};

export const getProductById = (id) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === parseInt(id));
};