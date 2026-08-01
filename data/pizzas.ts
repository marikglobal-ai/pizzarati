import type { Product } from '@/data/menuTypes'

const pizzaImages = [
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1200&q=90'
]

const commonExtras = [
  'extra-cheese',
  'pepperoni',
  'ham',
  'bacon',
  'chicken',
  'beef',
  'kebab',
  'sausage',
  'mushrooms',
  'onion',
  'jalapeno',
  'pineapple',
  'olives',
  'bell-pepper',
  'tomato',
  'feta',
  'gorgonzola',
  'tuna',
  'shrimp'
]

export const pizzas: Product[] = [
  {
    id: 1,
    category: 'pizza',
    price: 60,
    image: pizzaImages[0],
    rating: 4.8,
    time: 18,
    bestseller: true,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Margherita',
        description: 'Tomato sauce, mozzarella and oregano',
        badge: 'Classic'
      },
      da: {
        name: 'Margherita',
        description: 'Tomatsauce, mozzarella og oregano',
        badge: 'Klassiker'
      }
    }
  },
  {
    id: 2,
    category: 'pizza',
    price: 65,
    image: pizzaImages[1],
    rating: 4.7,
    time: 18,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Visovio',
        description: 'Tomato sauce, mozzarella and ham'
      },
      da: {
        name: 'Visovio',
        description: 'Tomatsauce, mozzarella og skinke'
      }
    }
  },
  {
    id: 3,
    category: 'pizza',
    price: 65,
    image: pizzaImages[2],
    rating: 4.8,
    time: 20,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Buffalo',
        description: 'Tomato sauce, mozzarella and beef'
      },
      da: {
        name: 'Buffalo',
        description: 'Tomatsauce, mozzarella og oksekød'
      }
    }
  },
  {
    id: 4,
    category: 'pizza',
    price: 70,
    image: pizzaImages[3],
    rating: 4.8,
    time: 20,
    bestseller: true,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Capricciosa',
        description: 'Tomato sauce, mozzarella, ham and mushrooms',
        badge: 'Popular'
      },
      da: {
        name: 'Capricciosa',
        description: 'Tomatsauce, mozzarella, skinke og champignon',
        badge: 'Populær'
      }
    }
  },
  {
    id: 5,
    category: 'pizza',
    price: 70,
    image: pizzaImages[0],
    rating: 4.7,
    time: 20,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Hawaii',
        description: 'Tomato sauce, mozzarella, ham and pineapple'
      },
      da: {
        name: 'Hawaii',
        description: 'Tomatsauce, mozzarella, skinke og ananas'
      }
    }
  },
  {
    id: 6,
    category: 'pizza',
    price: 70,
    image: pizzaImages[1],
    rating: 4.9,
    time: 20,
    bestseller: true,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Pepperoni',
        description: 'Tomato sauce, mozzarella and pepperoni',
        badge: 'Best seller'
      },
      da: {
        name: 'Pepperoni',
        description: 'Tomatsauce, mozzarella og pepperoni',
        badge: 'Bestseller'
      }
    }
  },
  {
    id: 7,
    category: 'pizza',
    price: 70,
    image: pizzaImages[2],
    rating: 4.7,
    time: 20,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Veri',
        description: 'Tomato sauce, mozzarella, ham and pepperoni'
      },
      da: {
        name: 'Veri',
        description: 'Tomatsauce, mozzarella, skinke og pepperoni'
      }
    }
  },
  {
    id: 8,
    category: 'pizza',
    price: 70,
    image: pizzaImages[3],
    rating: 4.8,
    time: 20,
    bestseller: true,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Kebab',
        description: 'Tomato sauce, mozzarella, kebab, pepperoni, onion and mushrooms',
        badge: 'Popular'
      },
      da: {
        name: 'Kebab',
        description: 'Tomatsauce, mozzarella, kebab, pepperoni, løg og champignon',
        badge: 'Populær'
      }
    }
  },
  {
    id: 9,
    category: 'pizza',
    price: 70,
    image: pizzaImages[0],
    rating: 4.8,
    time: 22,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Quattro',
        description: 'Tomato sauce, mozzarella, ham, beef, pepperoni and bacon'
      },
      da: {
        name: 'Quattro',
        description: 'Tomatsauce, mozzarella, skinke, oksekød, pepperoni og bacon'
      }
    }
  },
  {
    id: 10,
    category: 'pizza',
    price: 70,
    image: pizzaImages[1],
    rating: 4.7,
    time: 22,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Traquillo',
        description: 'Tomato sauce, mozzarella, kebab, ham, mushrooms and bacon'
      },
      da: {
        name: 'Traquillo',
        description: 'Tomatsauce, mozzarella, kebab, skinke, champignon og bacon'
      }
    }
  },
  {
    id: 11,
    category: 'pizza',
    price: 70,
    image: pizzaImages[2],
    rating: 4.7,
    time: 20,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Victory',
        description: 'Tomato sauce, mozzarella, sausage, pepperoni and meat sauce'
      },
      da: {
        name: 'Victory',
        description: 'Tomatsauce, mozzarella, pølser, pepperoni og kødsauce'
      }
    }
  },
  {
    id: 12,
    category: 'pizza',
    price: 75,
    image: pizzaImages[3],
    rating: 4.8,
    time: 22,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Isola',
        description: 'Tomato sauce, mozzarella, beef, feta, olives, onion and tomato slices'
      },
      da: {
        name: 'Isola',
        description: 'Tomatsauce, mozzarella, oksekød, feta, oliven, løg og tomatskiver'
      }
    }
  },
  {
    id: 13,
    category: 'pizza',
    price: 75,
    image: pizzaImages[0],
    rating: 4.7,
    time: 22,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Gorgonzola',
        description: 'Tomato sauce, mozzarella, beef, onion, mushrooms and gorgonzola'
      },
      da: {
        name: 'Gorgonzola',
        description: 'Tomatsauce, mozzarella, oksekød, løg, champignon og gorgonzola'
      }
    }
  },
  {
    id: 14,
    category: 'pizza',
    price: 75,
    image: pizzaImages[1],
    rating: 4.8,
    time: 22,
    bestseller: true,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Curry',
        description: 'Tomato sauce, mozzarella, chicken, bell pepper, onion and curry',
        badge: 'Popular'
      },
      da: {
        name: 'Karry',
        description: 'Tomatsauce, mozzarella, kylling, paprika, løg og karry',
        badge: 'Populær'
      }
    }
  },
  {
    id: 15,
    category: 'pizza',
    price: 75,
    image: pizzaImages[2],
    rating: 4.7,
    time: 20,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Vegetarian',
        description: 'Tomato sauce, mozzarella, mushrooms, onion, bell pepper, pineapple, olives and corn',
        badge: 'Vegetarian'
      },
      da: {
        name: 'Vegetar',
        description: 'Tomatsauce, mozzarella, champignon, løg, paprika, ananas, oliven og majs',
        badge: 'Vegetarisk'
      }
    }
  },
  {
    id: 16,
    category: 'pizza',
    price: 75,
    image: pizzaImages[3],
    rating: 4.7,
    time: 22,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Altuno',
        description: 'Tomato sauce, mozzarella, tuna, shrimp and onion'
      },
      da: {
        name: 'Altuno',
        description: 'Tomatsauce, mozzarella, tun, rejer og løg'
      }
    }
  },
  {
    id: 17,
    category: 'pizza',
    price: 85,
    image: pizzaImages[0],
    rating: 4.9,
    time: 25,
    bestseller: true,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Meat Lover',
        description: 'Tomato sauce, mozzarella, kebab, ham, beef, pepperoni, sausage and bacon',
        badge: 'Best seller'
      },
      da: {
        name: 'Meat Lover',
        description: 'Tomatsauce, mozzarella, kebab, skinke, oksekød, pepperoni, pølser og bacon',
        badge: 'Bestseller'
      }
    }
  },
  {
    id: 18,
    category: 'pizza',
    price: 90,
    image: pizzaImages[1],
    rating: 4.8,
    time: 25,
    bestseller: false,
    customizable: true,
    extraIngredientIds: commonExtras,
    translations: {
      en: {
        name: 'Build Your Own Pizza',
        description: 'Tomato sauce, mozzarella and up to 5 ingredients of your choice',
        badge: 'Build your own'
      },
      da: {
        name: 'Vælg selv pizza',
        description: 'Tomatsauce, mozzarella og op til 5 valgfri ingredienser',
        badge: 'Byg selv'
      }
    }
  }
]
