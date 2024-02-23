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
          @click="filterChildren('all')"
          :class="{ selected: filter === 'all' }"
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
              :description="item.description"
              :link="item.link"
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
        <slick ref="slick" :options="slickOptions">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="item-carousel"
          >
            <image-thumb-card
              :img="item.img"
              :title="item.title"
              :description="item.description"
              :link="item.link"
              :size="item.size"
            />
          </div>
        </slick>
      </hidden>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import ImageThumbCard from '../Cards/ImageThumb'
import Title from '../Title'
import Hidden from '../Hidden'

const portfolio = [
  {
    img: '/images/projects/website-gitlab.png',
    title: 'GitLab Marketing Website',
    description: 'Current maintainer and fullstack engineering lead',
    link: 'https://about.gitlab.com/',
    size: 'short',
    category: 'web',
  },
  {
    img: '/images/projects/website-calpolycorporation.png',
    title: 'Cal Poly Corporation',
    description: 'Past maintainer and fullstack engineering lead',
    link: 'https://www.calpolycorporation.org/',
    size: 'short',
    category: 'web'
  },
  {
    img: '/images/projects/designsystem-slippers.png',
    title: 'Slippers',
    description: 'Current maintainer and contributor',
    link: 'https://gitlab.com/gitlab-com/marketing/inbound-marketing/slippers-ui',
    size: 'short',
    category: 'design'
  },
  {
    img: '/images/projects/website-campusdining.png',
    title: 'Campus Dining, Cal Poly',
    description: 'Past maintainer and fullstack engineering lead',
    link: 'https://www.calpolydining.com/',
    size: 'short',
    category: 'web'
  },
  {
    img: '/images/projects/designsystem-cookbook.png',
    title: 'The Cookbook',
    description: 'Past maintainer and fullstack engineering lead',
    link: 'https://www.calpolydining.com/pattern-library/',
    size: 'short',
    category: 'design'
  },
  {
    img: '/images/projects/designsystem-wookiepedia.png',
    title: 'The Wookiepedia',
    description: 'Past maintainer and fullstack engineering lead',
    link: 'https://wookiepedia.calpolycorporation.org/',
    size: 'short',
    category: 'design'
  },
  {
    img: '/images/projects/website-palekaioutrigger.png',
    title: 'Pale Kai Outrigger',
    description: 'Past maintainer and engineering lead',
    link: 'https://www.palekai.org/',
    size: 'short',
    category: 'web'
  },
  {
    img: '/images/projects/application-xyztextbooks.png',
    title: 'XYZ Online Textbook Platform',
    description: 'Past maintainer and frontend engineering lead',
    link: 'https://www.xyztextbooks.com/ebook/title/applied_calculus',
    size: 'short',
    category: 'app'
  }
]

export default {
  components: {
    ImageThumbCard,
    'title-main': Title,
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      data: [],
      isLoaded: true,
      loaded: false,
      filter: 'all',
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        arrows: false
      }
    }
  },
  mounted() {
    this.data = portfolio
    this.loaded = true
  },
  methods: {
    filterChildren(name) {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name)
        this.data = filteredData
        this.filter = name
      } else {
        this.data = portfolio
        this.filter = 'all'
      }

      this.isLoaded = false
      setTimeout(() => {
        this.isLoaded = true
      }, 700)

      // re-init slick carousel for mobile
      if (this.isMobile) {
        this.$nextTick(() => {
          this.$refs.slick.reSlick()
        })
      }
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
