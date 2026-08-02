import type { PizzaSizeOption, Product, ProductTranslation } from '@/data/menuTypes'

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

type CreatePizzaParams = {
  id: number
  medium: number
  large: number
  xxl: number
  deepPan: number
  imageIndex: number
  rating: number
  time: number
  bestseller?: boolean
  en: ProductTranslation
  da: ProductTranslation
}

function createSizes(medium: number, large: number, xxl: number, deepPan: number): PizzaSizeOption[] {
  return [
    {
      key: 'medium',
      diameter: 32,
      price: medium
    },
    {
      key: 'large',
      diameter: 40,
      price: large
    },
    {
      key: 'xxl',
      diameter: 60,
      price: xxl
    },
    {
      key: 'deepPan',
      price: deepPan
    }
  ]
}

function createPizza({
  id,
  medium,
  large,
  xxl,
  deepPan,
  imageIndex,
  rating,
  time,
  bestseller = false,
  en,
  da
}: CreatePizzaParams): Product {
  return {
    id,
    category: 'pizza',

    // На карточке показываем цену Medium
    price: medium,

    pizzaSizes: createSizes(medium, large, xxl, deepPan),

    image: pizzaImages[imageIndex % pizzaImages.length],
    rating,
    time,
    bestseller,

    customizable: true,
    extraIngredientIds: commonExtras,

    translations: {
      en,
      da
    }
  }
}

export const pizzas: Product[] = [
  createPizza({
    id: 1,
    medium: 60,
    large: 120,
    xxl: 200,
    deepPan: 75,
    imageIndex: 0,
    rating: 4.8,
    time: 18,
    bestseller: true,
    en: {
      name: 'Margherita',
      description: 'Tomato sauce and cheese',
      badge: 'Classic'
    },
    da: {
      name: 'Margherita',
      description: 'Tomatsauce og ost',
      badge: 'Klassiker'
    }
  }),

  createPizza({
    id: 2,
    medium: 65,
    large: 125,
    xxl: 215,
    deepPan: 80,
    imageIndex: 1,
    rating: 4.7,
    time: 18,
    en: {
      name: 'Visovio',
      description: 'Tomato sauce, cheese and ham'
    },
    da: {
      name: 'Visovio',
      description: 'Tomatsauce, ost og skinke'
    }
  }),

  createPizza({
    id: 3,
    medium: 65,
    large: 125,
    xxl: 215,
    deepPan: 80,
    imageIndex: 2,
    rating: 4.8,
    time: 20,
    en: {
      name: 'Buffalo',
      description: 'Tomato sauce, cheese and beef'
    },
    da: {
      name: 'Buffalo',
      description: 'Tomatsauce, ost og okse'
    }
  }),

  createPizza({
    id: 4,
    medium: 70,
    large: 140,
    xxl: 240,
    deepPan: 85,
    imageIndex: 3,
    rating: 4.8,
    time: 20,
    bestseller: true,
    en: {
      name: 'Copricciosa',
      description: 'Tomato sauce, cheese, ham and mushrooms',
      badge: 'Popular'
    },
    da: {
      name: 'Copricciosa',
      description: 'Tomatsauce, ost, skinke og champignon',
      badge: 'Populær'
    }
  }),

  createPizza({
    id: 5,
    medium: 70,
    large: 140,
    xxl: 240,
    deepPan: 85,
    imageIndex: 0,
    rating: 4.7,
    time: 20,
    en: {
      name: 'Hawaii',
      description: 'Tomato sauce, cheese, ham and pineapple'
    },
    da: {
      name: 'Hawaii',
      description: 'Tomatsauce, ost, skinke og ananas'
    }
  }),

  createPizza({
    id: 6,
    medium: 70,
    large: 140,
    xxl: 240,
    deepPan: 85,
    imageIndex: 1,
    rating: 4.9,
    time: 20,
    bestseller: true,
    en: {
      name: 'Pepperoni',
      description: 'Tomato sauce, cheese and pepperoni',
      badge: 'Best seller'
    },
    da: {
      name: 'Pepperoni',
      description: 'Tomatsauce, ost og pepperoni',
      badge: 'Bestseller'
    }
  }),

  createPizza({
    id: 7,
    medium: 70,
    large: 140,
    xxl: 240,
    deepPan: 85,
    imageIndex: 2,
    rating: 4.7,
    time: 20,
    en: {
      name: 'Veri',
      description: 'Tomato sauce, cheese, ham and pepperoni'
    },
    da: {
      name: 'Veri',
      description: 'Tomatsauce, ost, skinke og pepperoni'
    }
  }),

  createPizza({
    id: 8,
    medium: 70,
    large: 145,
    xxl: 245,
    deepPan: 85,
    imageIndex: 3,
    rating: 4.8,
    time: 20,
    bestseller: true,
    en: {
      name: 'Kebab',
      description: 'Tomato sauce, cheese, kebab, pepperoni, onion and mushrooms',
      badge: 'Popular'
    },
    da: {
      name: 'Kebab',
      description: 'Tomatsauce, ost, kebab, pepperoni, løg og champignon',
      badge: 'Populær'
    }
  }),

  createPizza({
    id: 9,
    medium: 70,
    large: 145,
    xxl: 245,
    deepPan: 85,
    imageIndex: 0,
    rating: 4.8,
    time: 22,
    en: {
      name: 'Quattro',
      description: 'Tomato sauce, cheese, ham, beef, pepperoni and bacon'
    },
    da: {
      name: 'Quattro',
      description: 'Tomatsauce, ost, skinke, okse, pepperoni og bacon'
    }
  }),

  createPizza({
    id: 10,
    medium: 70,
    large: 145,
    xxl: 245,
    deepPan: 85,
    imageIndex: 1,
    rating: 4.7,
    time: 22,
    en: {
      name: 'Tranquillo',
      description: 'Tomato sauce, cheese, kebab, ham, mushrooms and bacon'
    },
    da: {
      name: 'Tranquillo',
      description: 'Tomatsauce, ost, kebab, skinke, champignon og bacon'
    }
  }),

  createPizza({
    id: 11,
    medium: 70,
    large: 145,
    xxl: 245,
    deepPan: 85,
    imageIndex: 2,
    rating: 4.7,
    time: 20,
    en: {
      name: 'Victory',
      description: 'Tomato sauce, cheese, sausage, pepperoni and meat sauce'
    },
    da: {
      name: 'Victory',
      description: 'Tomatsauce, ost, pølser, pepperoni og kødsauce'
    }
  }),

  createPizza({
    id: 12,
    medium: 75,
    large: 150,
    xxl: 250,
    deepPan: 90,
    imageIndex: 3,
    rating: 4.8,
    time: 22,
    en: {
      name: 'Isola',
      description: 'Tomato sauce, cheese, beef, feta, olives, onion and tomato slices'
    },
    da: {
      name: 'Isola',
      description: 'Tomatsauce, ost, okse, feta, oliven, løg og tomatskiver'
    }
  }),

  createPizza({
    id: 13,
    medium: 75,
    large: 150,
    xxl: 250,
    deepPan: 90,
    imageIndex: 0,
    rating: 4.7,
    time: 22,
    en: {
      name: 'Gorgonzola',
      description: 'Tomato sauce, cheese, beef, onion, mushrooms and gorgonzola'
    },
    da: {
      name: 'Gorgonzola',
      description: 'Tomatsauce, ost, okse, løg, champignon og gorgonzola'
    }
  }),

  createPizza({
    id: 14,
    medium: 75,
    large: 150,
    xxl: 250,
    deepPan: 90,
    imageIndex: 1,
    rating: 4.8,
    time: 22,
    bestseller: true,
    en: {
      name: 'Curry',
      description: 'Tomato sauce, cheese, chicken, bell pepper, onion and curry',
      badge: 'Popular'
    },
    da: {
      name: 'Karry',
      description: 'Tomatsauce, ost, kylling, paprika, løg og karry',
      badge: 'Populær'
    }
  }),

  createPizza({
    id: 15,
    medium: 75,
    large: 150,
    xxl: 250,
    deepPan: 90,
    imageIndex: 2,
    rating: 4.7,
    time: 20,
    en: {
      name: 'Vegetarian',
      description: 'Tomato sauce, cheese, mushrooms, onion, bell pepper, pineapple, olives and corn',
      badge: 'Vegetarian'
    },
    da: {
      name: 'Vegetar',
      description: 'Tomatsauce, ost, champignon, løg, paprika, ananas, oliven og majs',
      badge: 'Vegetarisk'
    }
  }),

  createPizza({
    id: 16,
    medium: 75,
    large: 150,
    xxl: 250,
    deepPan: 90,
    imageIndex: 3,
    rating: 4.7,
    time: 22,
    en: {
      name: 'Altuno',
      description: 'Tomato sauce, cheese, tuna, shrimp and onion'
    },
    da: {
      name: 'Altuno',
      description: 'Tomatsauce, ost, tun, rejer og løg'
    }
  }),

  createPizza({
    id: 17,
    medium: 85,
    large: 160,
    xxl: 260,
    deepPan: 100,
    imageIndex: 0,
    rating: 4.9,
    time: 25,
    bestseller: true,
    en: {
      name: 'Meat Lover',
      description: 'Tomato sauce, cheese, kebab, ham, beef, pepperoni, sausage and bacon',
      badge: 'Best seller'
    },
    da: {
      name: 'Meat Lover',
      description: 'Tomatsauce, ost, kebab, skinke, okse, pepperoni, pølser og bacon',
      badge: 'Bestseller'
    }
  }),

  createPizza({
    id: 18,
    medium: 90,
    large: 180,
    xxl: 280,
    deepPan: 105,
    imageIndex: 1,
    rating: 4.8,
    time: 25,
    en: {
      name: 'Build Your Own Pizza',
      description: 'Tomato sauce, cheese and up to 5 ingredients of your choice',
      badge: 'Build your own'
    },
    da: {
      name: 'Vælg selv pizza',
      description: 'Tomatsauce, ost og op til 5 valgfri ingredienser',
      badge: 'Byg selv'
    }
  })
]
