<template>
  <div class="root">
    <v-container :class="[isMobile ? 'max-sm' : 'max-lg']">
      <v-row>
        <v-col lg="2" cols="12" class="pa-0" />
        <v-col lg="9" cols="12" class="pa-0">
          <div class="about">
            <div class="reward">
              <div class="item">
                <figure>
                  <img src="/images/profile/barker-van.png" alt="badge" />
                </figure>
              </div>
              <div class="item">
                <figure>
                  <img src="/images/profile/barker-surf.png" alt="badge" />
                </figure>
              </div>
              <div class="item">
                <figure>
                  <img src="/images/profile/barker-fam.jpg" alt="badge" />
                </figure>
              </div>
            </div>
            <hidden point="mdUp">
              <div class="socmed">
                <v-btn icon size="small" variant="text" class="margin">
                  <a href="https://gitlab.com/laurenbarker">
                    <svg fill="#880e4f" width="22px" height="22px" viewBox="0 0 512 512" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="gitlab"><path d="M494.07,281.6l-25.18-78.08a11,11,0,0,0-.61-2.1L417.78,44.48a20.08,20.08,0,0,0-19.17-13.82A19.77,19.77,0,0,0,379.66,44.6L331.52,194.15h-152L131.34,44.59a19.76,19.76,0,0,0-18.86-13.94h-.11a20.15,20.15,0,0,0-19.12,14L42.7,201.73c0,.14-.11.26-.16.4L16.91,281.61a29.15,29.15,0,0,0,10.44,32.46L248.79,476.48a11.25,11.25,0,0,0,13.38-.07L483.65,314.07a29.13,29.13,0,0,0,10.42-32.47m-331-64.51L224.8,408.85,76.63,217.09m209.64,191.8,59.19-183.84,2.55-8h86.52L300.47,390.44M398.8,59.31l43.37,134.83H355.35M324.16,217l-43,133.58L255.5,430.14,186.94,217M112.27,59.31l43.46,134.83H69M40.68,295.58a6.19,6.19,0,0,1-2.21-6.9l19-59L197.08,410.27M470.34,295.58,313.92,410.22l.52-.69L453.5,229.64l19,59a6.2,6.2,0,0,1-2.19,6.92"/></svg>
                  </a>      
                </v-btn>
                <v-btn icon size="small" variant="text" class="margin">
                  <a href="https://www.linkedin.com/in/weblbdesigns/"><i class="ion-logo-linkedin" /></a>
                </v-btn>
              </div>
            </hidden>
            <hidden point="mdUp">
              <h5>
                {{ $t('profileLanding.banner_desc') }}
              </h5>
            </hidden>
            <v-card class="photo">
              <figure>
                <img :src="brand.profile.avatar" alt="avatar">
              </figure>
              <span class="frame" />
            </v-card>
          </div>
          <div class="line" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import Hidden from '../Hidden';
import brand from '@/assets/text/brand';

export default {
  components: {
    Hidden,
  },
  data() {
    return {
      brand,
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
};
</script>
