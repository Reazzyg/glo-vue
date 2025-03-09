<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <header-title-component :title="title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention
              <br />
              so questions.
              <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel
              <br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went
              <br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                classItem="shop__item"
                :name="cards[0].title"
                :price="cards[0].price"
                :image="cards[0].icon"
              />
              <product-card
                classItem="shop__item"
                :name="cards[1].title"
                :price="cards[1].price"
                :image="cards[1].icon"
              />
              <product-card
                classItem="shop__item"
                :name="cards[2].title"
                :price="cards[2].price"
                :image="cards[2].icon"
              />
              <product-card
                classItem="shop__item"
                :name="cards[3].title"
                :price="cards[3].price"
                :image="cards[3].icon"
              />
              <product-card
                classItem="shop__item"
                :name="cards[4].title"
                :price="cards[4].price"
                :image="cards[4].icon"
              />
              <product-card
                classItem="shop__item"
                :name="cards[5].title"
                :price="cards[5].price"
                :image="cards[5].icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
import HeaderTitleComponent from '@/components/HeaderTitleComponent.vue';
export default {
  components: { NavBarComponent, ProductCard, HeaderTitleComponent },
  data() {
    return {
      title: 'Our Coffee',
      cards: [
        {
          id: '0',
          title: 'Solimo Coffee Beans 2kg',
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
    };
  },
};
</script>
