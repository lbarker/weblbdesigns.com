<template>
  <div class="counter-wrap">
    <div id="watched_counter" />
    <v-container class="max-md">
      <v-row
        align="center"
        justify="center"
        class="root spacing6"
      >
        <v-col md="6" class="pa-6">
          <div class="counter-item">
            <div class="text" v-if="loaded">
              <i class="ion-ios-briefcase-outline" />
              <h4 class="use-text-title2">
                <span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 15,
                    options: { duration: 1 }
                  }"
                />
              </h4>
            </div>
            <h6 class="use-text-subtitle2">
              {{ $t('profileLanding.counter_completed') }}
            </h6>
          </div>
        </v-col>
        <v-col md="6" class="pa-6">
          <div class="counter-item">
            <div class="text" v-if="loaded">
              <i class="ion-ios-heart-outline" />
              <h4 class="use-text-title2">
                <span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 3,
                    options: { duration: 1 }
                  }"
                />
              </h4>
            </div>
            <h6 class="use-text-subtitle2">
              {{ $t('profileLanding.counter_happy') }}
            </h6>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
