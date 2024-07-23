<template>
  <div>
    <div class="main-wrap scroll-nav-content">
      <main-header />
      <section id="home">
        <banner-nav />
      </section>
      <section id="about">
        <about />
        <timeline />
        <counter />
      </section>
      <div class="grey-bg">
        <div class="deco-wrap">
          <decoration />
          <section id="my-work" class="space-top-short space-bottom-short">
            <gallery />
          </section>
        </div>
        <section id="testimonials">
          <testimonials />
        </section>
        <div class="deco-wrap bottom">
          <decoration />
          <section id="blog" class="space-top-short">
            <blog />
          </section>
        </div>
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.grey-bg {
  padding-top: $spacing10;
}
.space-bottom {
  margin-bottom: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin($spacing1 * 0.5);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
.deco-wrap {
  position: relative;
  &.bottom :deep(.inner-parallax) {
    top: -1500px;
  }
}
.bottom-deco {
  top: -200px;
  position: absolute;
  width: 100%;
  height: calc(100% + 200px);
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header';
import BannerNav from '@/components/BannerNav';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Decoration from '@/components/Parallax/Decoration';
import Gallery from '@/components/Gallery';
import Counter from '@/components/Counter';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Hidden from '@/components/Hidden';
import PageNav from '@/components/PageNav';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    About,
    BannerNav,
    Timeline,
    Counter,
    Decoration,
    Gallery,
    Testimonials,
    Blog,
    'main-footer': Footer,
    PageNav,
    Hidden,
    Notification,
  },
  setup() {
    // push route to the stored cookie languages only for index page
    const router = useRouter();
    const storedLang = useCookie('i18n_redirected');
    const i18nLocale = useI18n();

    const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
    onMounted(() => {
      const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
      if (storedLang.value && rootUrl) {
        router.push({ path: `/${storedLang.value}` });
      }
    });
  },
  head() {
    return {
      title: brand.profile.name + ' -  Luxi Theme Profile',
    };
  },
});
</script>
