<template>
  <div>
    <v-app-bar
      id="header"
      v-scroll="handleScroll"
      :class="{ fixed: invert || fixed || isMobile, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
      elevation="0"
    >
      <v-container :class="{ 'fixed-width': isDesktop }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo nav-menu"
          >
            <v-btn
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <a v-if="invert" :to="link.profile.home">
                <img :src="logo" alt="logo">
              </a>
              <span v-else>
                <a
                  v-smooth-scroll="{ offset: 100 }"
                  href="#home"
                  class="anchor-link scrollactive-item"
                >
                  <img :src="logo" alt="logo">
                </a>
              </span>
            </div>
            <setting-menu :invert="invert" />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
    <transition name="fade">
      <div v-if="openDrawer" class="paper-nav">
        <div class="mobile-nav">
          <ul class="menu">
            <li
              v-for="(item, index) in menuList"
              :key="index"
              :style="{ 'animation-duration': index * 0.15 + 's' }"
            >
              <v-btn
                :href="item.url"
                :class="{ active: activeMenu === item.name }"
                variant="text"
                @click="scrollToMyEl(item.name)"
                v-text="$t('profileLanding.header_'+item.name)"
              />
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { ref, inject } from 'vue';
import logo from '@/assets/images/profile-logo.svg';
import routeLink from '@/assets/text/link';
import { useRouter } from '#app';
import Settings from '../Settings';
import navMenu from '../SideNavigation/menu';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

export default {
  components: {
    'setting-menu': Settings,
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const openDrawer = ref(false);

    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();
      openDrawer.value = false;

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -50,
      });
    }

    function handleToggleOpen() {
      openDrawer.value = !openDrawer.value;
    }

    return {
      scrollToMyEl,
      openDrawer,
      handleToggleOpen,
    };
  },
  data() {
    return {
      logo,
      link: routeLink,
      loaded: false,
      show: false,
      fixed: false,
      activeMenu: '',
      sections: {},
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1], -100),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40),
      ],
    };
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 50;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
  },
};
</script>
