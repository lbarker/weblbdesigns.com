<template>
  <v-card class="post">
    <figure>
      <img :src="img" alt="thumb">
    </figure>
    <div class="text">
      <h5 class="use-text-subtitle2">
        {{ title }}
      </h5>
      <p class="use-text-paragraph">
        {{ desc }}
      </p>
    </div>
    <v-btn
      :href=href
      variant="text"
      size="small"
      color="primary"
      class="readmore"
      v-text="$t('profileLanding.read_more')"
    />
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
  },
};
</script>
