<template>
  <v-card class="img-thumb" :class="size">
    <div class="figure">
      <div class="img" :style="'background-image: url(' + img + ')'" />
    </div>
    <div class="detail">
      <h6 class="use-text-subtitle">
        {{ title }}
      </h6>
      <a v-if="href && desc" :href="href">
        {{ desc }}
      </a>

      <p  v-if="desc">
        {{ desc }}
      </p>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
};
</script>
