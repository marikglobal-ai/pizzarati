export type Language = 'en' | 'da'

export const translations = {
  en: {
    categories: {
      pizza: 'Pizza',
      burgers: 'Burgers',
      kebab: 'Kebab',
      durum: 'Durum',
      salads: 'Salads',
      drinks: 'Drinks',
      desserts: 'Desserts',
      items: 'items'
    },
    navbar: {
      home: 'Home',
      menu: 'Menu',
      about: 'About us',
      delivery: 'Delivery',
      contact: 'Contact',
      orderNow: 'Order now',
      openCart: 'Open cart',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      language: 'Language',
      english: 'English',
      danish: 'Dansk'
    },

    hero: {
      eyebrow: 'Premium Italian Pizza',
      titleFirst: 'Crafted',
      titleSecond: 'with',
      titleAccent: 'passion',
      description: 'We use the finest ingredients to create unforgettable flavours for pizza lovers.',
      orderNow: 'Order now',
      viewMenu: 'View menu',
      watch: 'Watch',
      ourStory: 'our story',
      stats: {
        rating: 'Average rating',
        delivery: 'Fast delivery',
        customers: 'Happy customers'
      }
    }
  },

  da: {
    categories: {
      pizza: 'Pizza',
      burgers: 'Burgere',
      kebab: 'Kebab',
      durum: 'Durum',
      salads: 'Salater',
      drinks: 'Drikkevarer',
      desserts: 'Desserter',
      items: 'varer'
    },
    navbar: {
      home: 'Hjem',
      menu: 'Menu',
      about: 'Om os',
      delivery: 'Levering',
      contact: 'Kontakt',
      orderNow: 'Bestil nu',
      openCart: 'Åbn kurv',
      openMenu: 'Åbn navigationsmenu',
      closeMenu: 'Luk navigationsmenu',
      language: 'Sprog',
      english: 'English',
      danish: 'Dansk'
    },

    hero: {
      eyebrow: 'Premium italiensk pizza',
      titleFirst: 'Skabt',
      titleSecond: 'med',
      titleAccent: 'passion',
      description: 'Vi bruger de bedste råvarer til at skabe uforglemmelige smagsoplevelser for pizzaelskere.',
      orderNow: 'Bestil nu',
      viewMenu: 'Se menu',
      watch: 'Se',
      ourStory: 'vores historie',
      stats: {
        rating: 'Gennemsnitlig vurdering',
        delivery: 'Hurtig levering',
        customers: 'Glade kunder'
      }
    }
  }
} as const
