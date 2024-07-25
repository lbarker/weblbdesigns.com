<template>
  <div class="navigation">
    <v-container class="fixed-width">
      <nav class="nav-menu">
        <span v-if="loaded">
          <a
            v-smooth-scroll="{ offset: 100 }"
            href="#home"
            class="logo anchor-link scrollactive-item"
          >
            <img :src="logo" alt="logo">
          </a>
        </span>
        <v-list nav class="menu">
          <ul>
            <v-list-item
              v-for="(item, index) in menuList"
              :key="index"
              :href="item.url"
              :class="{ active: activeMenu === item.name }"
              class="link anchor-link"
              @click="scrollToMyEl(item.name)"
            >
              <v-list-item-title class="text">
                {{ $t('profileLanding.header_' + item.name) }}
              </v-list-item-title>
            </v-list-item>
          </ul>
        </v-list>
      </nav>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './sidenav-style.scss';
</style>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/brandmark-design.png';
import { useRouter } from '#app';
import navMenu from './menu';

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
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -50,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      logo,
      loaded: false,
      navOffset: 20,
      sections: {},
      activeMenu: '',
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1], -100),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4]),
      ],
    };
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
