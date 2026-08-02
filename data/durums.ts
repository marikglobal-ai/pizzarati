import type { Product } from '@/data/menuTypes'

const durumImages = [
  'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1642783944285-b33b18ef6c91?auto=format&fit=crop&w=1200&q=90'
]

export const durums: Product[] = [
  {
    id: 42,
    category: 'durum',
    price: 60,
    menuPrice: 95,
    image: durumImages[0],
    rating: 4.8,
    time: 18,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'Kebab Durum',
        description: 'Kebab served with salad, tomato, cucumber and dressing',
        badge: 'Popular'
      },
      da: {
        name: 'Kebab Durum',
        description: 'Kebab serveret med salat, tomat, agurk og dressing',
        badge: 'Populær'
      }
    }
  },

  {
    id: 43,
    category: 'durum',
    price: 60,
    menuPrice: 95,
    image: durumImages[1],
    rating: 4.8,
    time: 18,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'Chicken Durum',
        description: 'Chicken served with salad, tomato, cucumber and dressing',
        badge: 'Popular'
      },
      da: {
        name: 'Kylling Durum',
        description: 'Kylling serveret med salat, tomat, agurk og dressing',
        badge: 'Populær'
      }
    }
  },

  {
    id: 44,
    category: 'durum',
    price: 60,
    menuPrice: 95,
    image: durumImages[2],
    rating: 4.9,
    time: 20,
    bestseller: true,
    customizable: false,
    translations: {
      en: {
        name: 'Mix Durum',
        description: 'Kebab and chicken served with salad, tomato, cucumber and dressing',
        badge: 'Best seller'
      },
      da: {
        name: 'Mix Durum',
        description: 'Kebab og kylling serveret med salat, tomat, agurk og dressing',
        badge: 'Bestseller'
      }
    }
  },

  {
    id: 45,
    category: 'durum',
    price: 60,
    menuPrice: 95,
    image: durumImages[3],
    rating: 4.7,
    time: 18,
    bestseller: false,
    customizable: false,
    translations: {
      en: {
        name: 'Falafel Durum',
        description: 'Falafel served with salad, tomato, cucumber and dressing',
        badge: 'Vegetarian'
      },
      da: {
        name: 'Falafel Durum',
        description: 'Falafel serveret med salat, tomat, agurk og dressing',
        badge: 'Vegetarisk'
      }
    }
  }
]
