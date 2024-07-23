<template>
  <div class="root">
    <v-container>
      <title-main>
        {{ $t('profileLanding.gallery_title') }}
        <strong>
          {{ $t('profileLanding.gallery_titleBold') }}
        </strong>
      </title-main>
      <div class="filter">
        <v-btn
          :class="{ selected: filter === 'all' }"
          @click="filterChildren('all')"
        >
          All
        </v-btn>
        <v-btn
          @click="filterChildren('web')"
          :class="{ selected: filter === 'web' }"
        >
          Websites
        </v-btn>
        <v-btn
          @click="filterChildren('design')"
          :class="{ selected: filter === 'design' }"
        >
          Design Systems
        </v-btn>
        <v-btn
          @click="filterChildren('app')"
          :class="{ selected: filter === 'app' }"
        >
          Applications
        </v-btn>
      </div>
      <hidden point="xsDown">
        <div class="massonry">
          <div
            v-for="(item, index) in data"
            :key="index"
            :class="{ loaded: isLoaded }"
            :style="{ 'transition-duration': index / 4 + 's' }"
            class="item"
          >
            <image-thumb-card
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
              :href="item.href"
              :size="item.size"
            />
          </div>
        </div>
        <p
          v-if="data.length < 1"
          class="overline text-center"
        >
          {{ $t('profileLanding.gallery_nodata') }}
        </p>
      </hidden>
      <hidden v-if="loaded" point="smUp">
        <splide ref="slick" :options="slickOptions">
          <splide-slide
            v-for="(item, index) in data"
            :key="index"
          >
            <div class="item-carousel">
              <image-thumb-card
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
                :href="item.href"
                :size="item.size"
              />
            </div>
          </splide-slide>
        </splide>
      </hidden>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import Hidden from '../Hidden';

// TODO: move this to content file, so it can be localized
const portfolio = [
{
    img: '/images/projects/website-gitlab.png',
    title: 'GitLab Marketing Website',
    desc: 'Current maintainer and fullstack engineering lead',
    href: 'https://handbook.gitlab.com/handbook/marketing/digital-experience/',
    size: 'short',
    category: 'web',
  },
  {
    img: '/images/projects/website-calpolycorporation.png',
    title: 'Cal Poly Corporation',
    desc: 'Past maintainer and fullstack engineering lead',
    href: 'Private project =/',
    size: 'short',
    category: 'web'
  },
  {
    img: '/images/projects/designsystem-slippers.png',
    title: 'Slippers',
    desc: 'Current maintainer and contributor',
    href: 'https://gitlab.com/gitlab-com/marketing/inbound-marketing/slippers-ui',
    size: 'short',
    category: 'design'
  },
  {
    img: '/images/projects/website-campusdining.png',
    title: 'Campus Dining, Cal Poly',
    desc: 'Past maintainer and fullstack engineering lead',
    href: '#',
    size: 'short',
    category: 'web'
  },
  {
    img: '/images/projects/designsystem-cookbook.png',
    title: 'The Cookbook',
    desc: 'Past maintainer and fullstack engineering lead',
    href: '#',
    size: 'short',
    category: 'design'
  },
  {
    img: '/images/projects/designsystem-wookiepedia.png',
    title: 'The Wookiepedia',
    desc: 'Past maintainer and fullstack engineering lead',
    href: 'https://wookiepedia.calpolycorporation.org/',
    size: 'short',
    category: 'design'
  },
  {
    img: '/images/projects/website-palekaioutrigger.png',
    title: 'Pale Kai Outrigger',
    desc: 'Past maintainer and engineering lead',
    href: 'https://github.com/lbarker/palekai.org',
    size: 'short',
    category: 'web'
  },
  {
    img: '/images/projects/application-xyztextbooks.png',
    title: 'XYZ Online Textbook Platform',
    desc: 'Past maintainer and frontend engineering lead',
    href: 'https://www.xyztextbooks.com/ebook/title/applied_calculus',
    size: 'short',
    category: 'app'
  }
];

export default {
  components: {
    ImageThumbCard,
    'title-main': Title,
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      data: [],
      isLoaded: true,
      loaded: false,
      filter: 'all',
      slickOptions: {
        paginations: false,
        speed: 500,
        perPage: 1,
        arrows: false,
        direction: 'ltr',
      },
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
  },
  mounted() {
    this.data = portfolio;
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    filterChildren(name) {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name);
        this.data = filteredData;
        this.filter = name;
      } else {
        this.data = portfolio;
        this.filter = 'all';
      }

      this.isLoaded = false;
      setTimeout(() => {
        this.isLoaded = true;
      }, 700);
    },
  },
};
</script>
