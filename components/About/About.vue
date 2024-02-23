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
                <v-btn icon small class="margin">
                  <i class="ion-social-facebook" />
                </v-btn>
                <v-btn icon small class="margin">
                  <i class="ion-social-twitter" />
                </v-btn>
                <v-btn icon small class="margin">
                  <i class="ion-social-instagram" />
                </v-btn>
                <v-btn icon small class="margin">
                  <i class="ion-social-linkedin" />
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
                <img :src="brand.profile.avatar" alt="avatar" />
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
import Hidden from '../Hidden'
import brand from '~/static/text/brand'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      brand: brand
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
