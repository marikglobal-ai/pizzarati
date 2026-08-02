import type { Product } from '@/data/menuTypes'

const burgerImages = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=90'
]

export const burgers: Product[] = [
  {
    id: 63,
    category: 'burgers',
    price: 65,
    menuPrice: 110,
    image: burgerImages[0],
    rating: 4.8,
    time: 18,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'Classic Burger',
        description: 'Classic burger with fresh salad, tomato, cucumber and dressing',
        badge: 'Classic'
      },
      da: {
        name: 'Classic Burger',
        description: 'Klassisk burger med frisk salat, tomat, agurk og dressing',
        badge: 'Klassiker'
      }
    }
  },

  {
    id: 64,
    category: 'burgers',
    price: 75,
    menuPrice: 110,
    image: burgerImages[1],
    rating: 4.8,
    time: 18,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'Cheese Burger',
        description: 'Classic burger with cheese, fresh salad, tomato, cucumber and dressing',
        badge: 'Popular'
      },
      da: {
        name: 'Cheese Burger',
        description: 'Klassisk burger med ost, frisk salat, tomat, agurk og dressing',
        badge: 'Populær'
      }
    }
  },

  {
    id: 65,
    category: 'burgers',
    price: 70,
    menuPrice: 110,
    image: burgerImages[2],
    rating: 4.7,
    time: 18,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Bacon Burger',
        description: 'Burger with crispy bacon, fresh salad, tomato, cucumber and dressing'
      },
      da: {
        name: 'Bacon Burger',
        description: 'Burger med sprød bacon, frisk salat, tomat, agurk og dressing'
      }
    }
  },

  {
    id: 66,
    category: 'burgers',
    price: 80,
    menuPrice: 115,
    image: burgerImages[3],
    rating: 4.9,
    time: 20,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'Bacon-Cheese Burger',
        description: 'Burger with bacon, cheese, fresh salad, tomato, cucumber and dressing',
        badge: 'Best seller'
      },
      da: {
        name: 'Bacon-Cheese Burger',
        description: 'Burger med bacon, ost, frisk salat, tomat, agurk og dressing',
        badge: 'Bestseller'
      }
    }
  },

  {
    id: 67,
    category: 'burgers',
    price: 80,
    menuPrice: 115,
    image: burgerImages[0],
    rating: 4.8,
    time: 20,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'BBQ Burger',
        description: 'Burger with bacon and BBQ sauce',
        badge: 'Popular'
      },
      da: {
        name: 'BBQ Burger',
        description: 'Burger med bacon og BBQ-sauce',
        badge: 'Populær'
      }
    }
  },

  {
    id: 68,
    category: 'burgers',
    price: 80,
    menuPrice: 115,
    image: burgerImages[1],
    rating: 4.7,
    time: 20,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Mexico Burger',
        description: 'Burger with jalapeños and salsa',
        badge: 'Spicy'
      },
      da: {
        name: 'Mexico Burger',
        description: 'Burger med jalapeños og salsa',
        badge: 'Stærk'
      }
    }
  },

  {
    id: 69,
    category: 'burgers',
    price: 80,
    menuPrice: 115,
    image: burgerImages[2],
    rating: 4.7,
    time: 20,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Supreme Burger',
        description: 'Burger with onion and cheese'
      },
      da: {
        name: 'Supreme Burger',
        description: 'Burger med løg og ost'
      }
    }
  },

  {
    id: 70,
    category: 'burgers',
    price: 80,
    menuPrice: 115,
    image: burgerImages[3],
    rating: 4.8,
    time: 20,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Special Burger',
        description: 'Burger with fried egg and bacon'
      },
      da: {
        name: 'Special Burger',
        description: 'Burger med spejlæg og bacon'
      }
    }
  },

  {
    id: 71,
    category: 'burgers',
    price: 85,
    menuPrice: 120,
    image: burgerImages[0],
    rating: 4.8,
    time: 22,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'The Ring',
        description: 'Burger with onion rings and chili mayonnaise',
        badge: 'Popular'
      },
      da: {
        name: 'The Ring',
        description: 'Burger med løgringe og chilimayo',
        badge: 'Populær'
      }
    }
  },

  {
    id: 72,
    category: 'burgers',
    price: 85,
    menuPrice: 120,
    image: burgerImages[1],
    rating: 4.7,
    time: 22,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Ristede Burger',
        description: 'Burger with crispy onions, ketchup and cheese'
      },
      da: {
        name: 'Ristede Burger',
        description: 'Burger med ristede løg, ketchup og ost'
      }
    }
  },

  {
    id: 73,
    category: 'burgers',
    price: 85,
    menuPrice: 120,
    image: burgerImages[2],
    rating: 4.8,
    time: 22,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Bearnaise Burger',
        description: 'Burger with bearnaise sauce and cheese'
      },
      da: {
        name: 'Bearnaise Burger',
        description: 'Burger med bearnaisesauce og ost'
      }
    }
  },

  {
    id: 74,
    category: 'burgers',
    price: 75,
    menuPrice: 110,
    image: burgerImages[3],
    rating: 4.7,
    time: 20,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Chicken Burger',
        description: 'Chicken burger with cheese and bacon'
      },
      da: {
        name: 'Kylling Burger',
        description: 'Kyllingeburger med ost og bacon'
      }
    }
  },

  {
    id: 75,
    category: 'burgers',
    price: 80,
    menuPrice: 115,
    image: burgerImages[0],
    rating: 4.8,
    time: 20,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'Crunchy Burger',
        description: 'Burger with crispy chicken and cheese',
        badge: 'Crunchy'
      },
      da: {
        name: 'Crunchy Burger',
        description: 'Burger med sprød kylling og ost',
        badge: 'Sprød'
      }
    }
  },

  {
    id: 76,
    category: 'burgers',
    price: 100,
    menuPrice: 135,
    image: burgerImages[1],
    rating: 4.9,
    time: 25,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'The Bomb',
        description: 'Large 400 g burger with cheese and bacon',
        badge: '400 g'
      },
      da: {
        name: 'The Bomb',
        description: 'Stor burger på 400 g med ost og bacon',
        badge: '400 g'
      }
    }
  }
]
