<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <v-row>
        <v-col lg="2" cols="12" class="pa-0">
          <hidden point="mdDown">
            <side-navigation />
          </hidden>
        </v-col>
        <v-col lg="10" cols="12" class="pa-0">
          <div class="banner">
            <div class="cover">
              <div class="figure">
                <img :src="brand.profile.cover" alt="cover" />
                <div class="overlay" />
              </div>
            </div>
            <hidden point="mdDown">
              <div class="setting-icon">
                <settings />
              </div>
            </hidden>
            <div class="text">
              <h4 class="use-text-title2">
                <!-- {{ $t('profileLanding.banner_greeting') }},  -->
              </h4>
              <h2 class="use-text-title">
                <!-- {{ $t('profileLanding.banner_me') }} &nbsp; -->
                Lauren Barker,<br/>Fullstack Engineer
              </h2>
                <h5 class="use-text-subtitle2">
                  {{ $t('profileLanding.banner_desc') }}
                </h5>
                <div class="socmed">
                  <v-btn icon small class="margin">
                    <a href="https://gitlab.com/laurenbarker"><ion-icon name="logo-gitlab"></ion-icon></a>           
                  </v-btn>
                  <v-btn icon small class="margin">
                    <a href="https://www.linkedin.com/in/weblbdesigns/"><ion-icon name="logo-linkedin"></ion-icon></a>
                  </v-btn>
                </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';

</style>

<script>
import SideNavigation from '../SideNavigation'
import Hidden from '../Hidden'
import brand from '~/static/text/brand'
import Settings from '../Settings'
import icons from './ionicons.js'

export default {
  components: {
    Hidden,
    SideNavigation,
    Settings,
    icons
  },
  data: () => ({
    brand: brand
  }),
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
