<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    class="counter-wrap"
  >
    <v-container class="max-md">
      <v-row
        align="center"
        justify="center"
        class="root spacing6"
      >
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <i class="ion-ios-briefcase-outline" />
              <h4 class="use-text-title2">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="17"
                />
              </h4>
            </div>
            <h6 class="use-text-subtitle2">
              {{ $t('profileLanding.counter_completed') }}
            </h6>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <i class="ion-ios-heart-outline" />
              <h4 class="use-text-title2">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="3"
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
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const windowBound = wrapper.value.getBoundingClientRect();

      if (windowBound.top < offset) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
