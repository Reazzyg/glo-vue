<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-bar-item-component
        :link="links.header.link"
        className="header__item"
      >
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </nav-bar-item-component>

      <nav-bar-item-component
        v-for="link in links.other"
        :key="link.id"
        className="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import NavBarItemComponent from './NavBarItemComponent.vue';
export default {
  components: { NavBarItemComponent },
  data() {
    return {
      links: {
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
      },
    };
  },
};
</script>
