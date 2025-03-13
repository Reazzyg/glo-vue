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
  computed: {
    links() {
      return this.$store.getters['getHeaderLinks'];
    },
  },
};
</script>
