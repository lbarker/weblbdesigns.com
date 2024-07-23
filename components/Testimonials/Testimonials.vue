<template>
  <div class="root">
    <v-container>
      <title-main dark>
        {{ $t('profileLanding.testi_title') }}
        <strong>
          {{ $t('profileLanding.testi_titleBold') }}
        </strong>
      </title-main>
      <v-row>
        <v-col md="7" cols="12">
          <div class="world-map">
            <hidden point="xsDown">
              <div class="avatar-wrap">
                <div
                  v-for="(item, index) in testiData"
                  :key="index"
                  :style="{ left: item.x + 'px', top: item.y + 'px'}"
                  class="avatar-item"
                >
                  <v-menu
                    :open-on-hover="isDesktop"
                    transition="scale-transition"
                    location="top center"
                    content-class="paper"
                  >
                    <template #activator="{ props }">
                      <v-btn variant="text" v-bind="props" icon>
                        <avatar-buble
                          :avatar="item.avatar"
                          :name="item.name"
                        />
                      </v-btn>
                    </template>
                    <v-card class="paper-block">
                      <p class="pb-2">
                        {{ item.text }}
                      </p>
                      <h6>
                        {{ item.name }}
                      </h6>
                      <p class="title-main">
                        {{ item.title }}
                      </p>
                    </v-card>
                  </v-menu>
                </div>
              </div>
            </hidden>
            <hidden point="smUp">
              <splide ref="slick" :options="slickOptions">
                <splide-slide
                  v-for="(item, index) in testiData"
                  :key="index"
                >
                  <div class="item-carousel">
                    <v-card class="card">
                      <p class="body-1">
                        {{ item.text }}
                      </p>
                      <div class="name">
                        <v-avatar v-if="item.avatar" class="avatar">
                          <img :src="item.avatar" :alt="item.name">
                        </v-avatar>
                        <v-avatar v-else color="grey" class="avatar">
                          <strong class="white--text headline">
                            {{ firsthChar(item.name) }}
                          </strong>
                        </v-avatar>
                        <span class="caption">
                          {{ item.name }}
                        </span>
                      </div>
                    </v-card>
                  </div>
                </splide-slide>
              </splide>
            </hidden>
          </div>
        </v-col>
        <v-col md="5" cols="12">
          <div class="text">
            <div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="300"
                data-aos-delay="200"
              >
                <h3 class="use-text-title2">
                  {{ $t('profileLanding.testi_title2') }}
                </h3>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="300"
                data-aos-delay="300"
              >
                <div>
                  <p class="use-text-paragraph">
                    {{ $t('profileLanding.testi_desc') }}
                  </p>
                  <!-- 
                  <v-btn color="secondary" href="#contact" large class="button">
                    {{ $t('profileLanding.testi_button') }}
                  </v-btn>
                  -->
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Hidden from '../Hidden';
import AvatarBuble from './AvatarBuble';
import testiData from './testimonialsData';
import Title from '../Title';

export default {
  components: {
    'title-main': Title,
    AvatarBuble,
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      testiData,
      popupData: {},
      slickOptions: {
        pagination: false,
        speed: 500,
        perMove: 1,
        direction: 'ltr',
        arrows: false,
      },
    };
  },
  computed: {
    firsthChar() {
      return txt => txt.charAt(0);
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });

    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 200);
  },
};
</script>
