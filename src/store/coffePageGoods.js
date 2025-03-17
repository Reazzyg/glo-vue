const coffePageGoods = {
  state: {
    coffePageGoods: [
      {
        id: '0',
        title: '123123Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73,
        icon: 'coffee-3.jpg',
      },
      {
        id: '1',
        title: 'Presto Coffee Beans 1kg',
        country: 'Brazil',
        price: 15.99,
        icon: 'coffee-2.jpg',
      },
      {
        id: '2',
        title: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 6.99,
        icon: 'coffee-1.jpg',
      },
      {
        id: '3',
        title: 'Presto Coffee Beans 1kg',
        country: 'Brazil',
        price: 10.73,
        icon: 'coffee-3.jpg',
      },
      {
        id: '4',
        title: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 8.73,
        icon: 'coffee-2.jpg',
      },
      {
        id: '5',
        title: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 12.77,
        icon: 'coffee-1.jpg',
      },
    ],
  },
  getters: {
    getCoffePageGoods(state) {
      return state.coffePageGoods;
    },
    getCoffeeById(state) {
      return (id) => state.coffePageGoods.find((card) => card.id === id);
    },
  },
};

export default coffePageGoods;
