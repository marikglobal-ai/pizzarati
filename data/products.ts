export type ProductLanguage = 'en' | 'da'

type ProductText = {
  name: string
  description: string
  badge?: string
}

export type Product = {
  id: number
  category: 'pizza'
  price: number
  image: string
  rating: number
  time: number
  bestseller: boolean
  translations: Record<ProductLanguage, ProductText>
}

export const products: Product[] = [
  {
    id: 1,
    category: 'pizza',
    price: 119,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90',
    rating: 4.9,
    time: 20,
    bestseller: true,
    translations: {
      en: {
        name: 'Pepperoni',
        description: 'Italian pepperoni, mozzarella and tomato sauce',
        badge: 'Best seller'
      },
      da: {
        name: 'Pepperoni',
        description: 'Italiensk pepperoni, mozzarella og tomatsauce',
        badge: 'Bestseller'
      }
    }
  },
  {
    id: 2,
    category: 'pizza',
    price: 99,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1200&q=90',
    rating: 4.8,
    time: 18,
    bestseller: true,
    translations: {
      en: {
        name: 'Margherita',
        description: 'Tomato sauce, mozzarella, basil and olive oil',
        badge: 'Popular'
      },
      da: {
        name: 'Margherita',
        description: 'Tomatsauce, mozzarella, basilikum og olivenolie',
        badge: 'Populær'
      }
    }
  },
  {
    id: 3,
    category: 'pizza',
    price: 129,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=90',
    rating: 4.8,
    time: 20,
    bestseller: true,
    translations: {
      en: {
        name: 'Diavola',
        description: 'Spicy salami, chili, mozzarella and tomato sauce',
        badge: 'Spicy'
      },
      da: {
        name: 'Diavola',
        description: 'Krydret salami, chili, mozzarella og tomatsauce',
        badge: 'Stærk'
      }
    }
  },
  {
    id: 4,
    category: 'pizza',
    price: 125,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=90',
    rating: 4.9,
    time: 22,
    bestseller: true,
    translations: {
      en: {
        name: 'Capricciosa',
        description: 'Ham, mushrooms, olives, mozzarella and artichokes',
        badge: 'New'
      },
      da: {
        name: 'Capricciosa',
        description: 'Skinke, champignon, oliven, mozzarella og artiskokker',
        badge: 'Ny'
      }
    }
  }
]
