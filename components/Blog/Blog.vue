<template>
  <div class="root">
    <div class="floating-title">
      <title-main>
        {{ $t('profileLanding.blog_title') }}
        <strong>
          {{ $t('profileLanding.blog_titlebold') }}
        </strong>
      </title-main>
      <p class="mb-0 use-text-paragraph">
        {{ $t('profileLanding.blog_desc') }}
      </p>
    </div>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <v-btn
          icon
          fab
          class="nav prev"
          @click="prev()"
        >
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <splide ref="slick" :options="slickOptions">
          <splide-slide>
            <div class="item item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in blogData"
            :key="index"
          >
            <div class="item">
              <blog-post-card
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
                :href="item.href"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item item-props-last">
              <div />
            </div>
          </splide-slide>
        </splide>
        <v-btn
          icon
          fab
          class="nav next"
          @click="next()"
        >
          <i class="ion-ios-arrow-forward" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Title from '../Title';
import BlogPostCard from '../Cards/BlogPost';
import imgApi from '@/assets/images/imgAPI';

// TODO: move this to content file, so it can be localized
const blogData = [
  {
    img: 'https://about.gitlab.com/images/blogimages/barker.jpg',
    title: 'CEO Shadow Takeaways',
    desc:
      'I just completed the CEO Shadow program for GitLab. It is a two-week program . . .',
    href: 'https://about.gitlab.com/blog/2021/02/26/ceo-shadow-takeaways-from-barker/'
  }
];

export default {
  components: {
    'title-main': Title,
    BlogPostCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      blogData,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 4,
        perMove: 1,
        arrows: false,
        autoWidth: true,
        direction: 'ltr',
        breakpoints: {
          1080: {
            perPage: 3,
          },
          600: {
            perPage: 2,
          },
        },
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 200);
  },
  methods: {
    next() {
      this.$refs.slick.go('>');
    },
    prev() {
      this.$refs.slick.go('<');
    },
  },
};
</script>
