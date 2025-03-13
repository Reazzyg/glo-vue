const links = {
  state: {
    header: { id: '0', link: '/', icon: 'Logo.svg' },
    other: [
      {
        id: '1',
        text: 'Our coffee',
        link: '/our-coffe',
      },
      {
        id: '2',
        text: 'For your pleasure',
        link: '/our-goods',
      },
      {
        id: '3',
        text: 'Contact us',
        link: '/our-contacts',
      },
    ],
    footer: { id: '0', link: '/', icon: 'Logo_black.svg' },
  },
  getters: {
    getHeaderLinks(state) {
      return { header: state.header, other: state.other };
    },
    getFooterLinks(state) {
      return { footer: state.footer, other: state.other };
    },
  },
};

export default links;
