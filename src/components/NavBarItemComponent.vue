<template>
  <li :class="className">
    <router-link :to="link">
      {{ text }}

      <slot></slot>
    </router-link>
  </li>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },

    className: {
      type: String,
      required: false,
    },
  },
};
</script>
