<template>
  <div v-if="loaded">
    <div id="timeline">
      <div ref="wrapper" v-scroll="handleScroll" class="root">
        <v-container :class="{'fixed-width': isDesktop}">
          <v-row>
            <v-col lg="2" cols="12" class="pa-0">
              <hidden point="mdDown">
                <!-- 
                <h2 class="name-deco">
                  {{ brand.profile.name }}
                </h2>
                -->
              </hidden>
            </v-col>
            <v-col lg="10" cols="12" class="pa-0">
              <v-row class="spacing3">
                <v-col md="5" sm="6" cols="12" class="px-sm-3 px-6 py-0">
                  <div class="history">
                    <h5 class="title-timeline use-text-subtitle">
                      {{ $t('profileLanding.timeline_experience') }}
                    </h5>
                    <div>
                      <ul>
                        <li>
                          <div
                            data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-duration="300"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Engineering Manager</h3>
                              <p class="mb-2">at GitLab</p>
                              <p class="time">April 2022 - Present</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3 class="use-text-subtitle2 pb-2">Senior Fullstack Engineer</h3>
                            <p class="mb-2">at GitLab</p>
                            <p class="time">2019 - April 2022</p>
                          </div>
                        </li>
                        <li>
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Fullstack Engineer</h3>
                              <p class="mb-2">at Cal Poly Corporation</p>
                              <p class="time">2015 - 2019</p>
                            </div>
                        </li>
                        <li>
                           <div>
                              <h3 class="use-text-subtitle2 pb-2">Frontend Developer</h3>
                              <p class="mb-2">at XYZ Textbooks</p>
                              <p class="time">2013 - 2015</p>
                            </div>
                        </li>
                        <li>
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Freelance Web Developer</h3>
                              <p class="mb-2">at WebLB Designs</p>
                              <p class="time">2007 - 2013</p>
                            </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
                <v-col sm="6" cols="12" class="px-sm-3 px-6 py-0">
                  <div class="progress-wrap">
                    <h5 class="title-timeline use-text-subtitle">
                      {{ $t('profileLanding.timeline_skill') }}
                    </h5>
                    <ul>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-star-outline" />
                          <h5 class="use-text-subtitle2">
                            Leadership
                          </h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 95 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-logo-dribbble" />
                          <h5 class="use-text-subtitle2">
                            Continuous Integration and Delivery 
                          </h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 93 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-create-outline" />
                          <h5 class="use-text-subtitle2">
                            Content Management Systems
                          </h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 91 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-move" />
                          <h5 class="use-text-subtitle2">
                            Design Systems
                          </h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 85 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-globe" />
                          <h5 class="use-text-subtitle2">
                            Globalization
                          </h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 80 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-switch" />
                          <h5 class="use-text-subtitle2">
                            A/B Testing
                          </h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 75 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-trending-up" />
                          <h5 class="use-text-subtitle2">
                            Marketing Automation
                          </h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 70 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                    </ul>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './timeline-style.scss';
</style>

<script>
import AOS from 'aos';
import Hidden from '../Hidden';
import brand from '@/assets/text/brand';

export default {
  components: {
    Hidden,
  },
  data() {
    return {
      loaded: false,
      brand,
      play: false,
    };
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
  methods: {
    handleScroll() {
      const { wrapper } = this.$refs;
      const windowBound = wrapper.getBoundingClientRect();

      if (windowBound.top < 100) {
        this.play = true;
      }
    },
  },
};
</script>
