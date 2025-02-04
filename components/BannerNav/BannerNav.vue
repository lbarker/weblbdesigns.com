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
                <img :src="brand.profile.cover" alt="cover">
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
                {{ $t('profileLanding.banner_greeting') }},
              </h4>
              <h2 class="use-text-title">
                {{ $t('profileLanding.banner_me') }}
              </h2>
              <hidden point="smDown">
                <h5 class="use-text-subtitle2">
                  {{ $t('profileLanding.banner_desc') }}
                </h5>
                <div class="socmed">
                  <v-btn icon size="small" variant="text" class="margin">
                    <a href="https://www.linkedin.com/in/weblbdesigns/"><i class="ion-logo-linkedin" /></a>
                  </v-btn>
                  <v-btn icon size="small" variant="text" class="margin">
                    <a href="https://gitlab.com/laurenbarker">
                      <svg fill="#fff" width="44px" height="44px" viewBox="0 0 512 512" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="gitlab"><path d="M494.07,281.6l-25.18-78.08a11,11,0,0,0-.61-2.1L417.78,44.48a20.08,20.08,0,0,0-19.17-13.82A19.77,19.77,0,0,0,379.66,44.6L331.52,194.15h-152L131.34,44.59a19.76,19.76,0,0,0-18.86-13.94h-.11a20.15,20.15,0,0,0-19.12,14L42.7,201.73c0,.14-.11.26-.16.4L16.91,281.61a29.15,29.15,0,0,0,10.44,32.46L248.79,476.48a11.25,11.25,0,0,0,13.38-.07L483.65,314.07a29.13,29.13,0,0,0,10.42-32.47m-331-64.51L224.8,408.85,76.63,217.09m209.64,191.8,59.19-183.84,2.55-8h86.52L300.47,390.44M398.8,59.31l43.37,134.83H355.35M324.16,217l-43,133.58L255.5,430.14,186.94,217M112.27,59.31l43.46,134.83H69M40.68,295.58a6.19,6.19,0,0,1-2.21-6.9l19-59L197.08,410.27M470.34,295.58,313.92,410.22l.52-.69L453.5,229.64l19,59a6.2,6.2,0,0,1-2.19,6.92"/></svg>
                    </a>      
                  </v-btn>
                </div>
              </hidden>
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
import SideNavigation from '../SideNavigation';
import Hidden from '../Hidden';
import brand from '@/assets/text/brand';
import Settings from '../Settings';

export default {
  components: {
    Hidden,
    SideNavigation,
    Settings,
  },
  data: () => ({
    brand,
  }),
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
};
</script>
