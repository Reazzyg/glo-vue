const bestsellerGoods = {
  state: {
    bestsellers: [
      {
        id: '0',
        title: ' Solimo Coffee Beans 2kg',
        price: 10.73,
        icon: 'coffee-1.jpg',
      },
      {
        id: '1',
        title: 'Presto Coffee Beans 1kg',
        price: 15.99,
        icon: 'coffee-2.jpg',
      },
      {
        id: '2',
        title: 'AROMISTICO Coffee 1kg',
        price: 6.99,
        icon: 'coffee-3.jpg',
      },
    ],
  },
  getters: {
    getBestsellerGoods(state) {
      return state.bestsellers;
    },
  },
};

export default bestsellerGoods;
