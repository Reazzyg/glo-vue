<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-bar-item-component
              :link="links.footer.link"
              className="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </nav-bar-item-component>

            <nav-bar-item-component
              v-for="link in links.other"
              className="footer__item"
              :link="link.link"
              :text="link.text"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import NavBarItemComponent from './NavBarItemComponent.vue';
export default {
  components: { NavBarItemComponent },
  data() {
    return {
      links: {
        footer: { id: '0', link: '/', icon: 'Logo_black.svg' },
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
