<template>
  <div v-if="loaded">
    <div id="timeline">
      <div class="root" v-scroll="handleScroll">
        <v-container :class="{'fixed-width': isDesktop}">
          <v-row>
            <v-col lg="2" cols="12" class="pa-0">
              <hidden point="mdDown">
                <h2 class="name-deco">
                  {{ brand.profile.name }}
                </h2>
              </hidden>
            </v-col>
            <v-col lg="10" cols="12" class="pa-0">
              <v-row class="spacing3">
                <v-col md="5" sm="6" cols="12" class="px-sm-3 px-6 py-0">
                  <div class="history">
                    <h5 class="title-timeline use-text-subtitle">
                      {{ $t('profileLanding.timeline_experience') }}
                    </h5>
                    <u-animate-container>
                      <ul>
                        <li>
                          <u-animate
                            :offset="100"
                            name="fadeInLeftShort"
                            duration="0.3s"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Engineering Manager</h3>
                              <p class="mb-2">at GitLab</p>
                              <p class="time">April 2022 - Present</p>
                            </div>
                          </u-animate>
                        </li>
                        <li>
                          <u-animate
                            :offset="100"
                            name="fadeInLeftShort"
                            duration="0.3s"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Senior Fullstack Engineer</h3>
                              <p class="mb-2">at GitLab</p>
                              <p class="time">2019 - April 2022</p>
                            </div>
                          </u-animate>
                        </li>
                        <li>
                          <u-animate
                            :offset="100"
                            name="fadeInLeftShort"
                            duration="0.3s"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Fullstack Engineer</h3>
                              <p class="mb-2">at Cal Poly Corporation</p>
                              <p class="time">2015 - 2019</p>
                            </div>
                          </u-animate>
                        </li>
                        <li>
                          <u-animate
                            :offset="100"
                            name="fadeInLeftShort"
                            duration="0.3s"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Frontend Developer</h3>
                              <p class="mb-2">at XYZ Textbooks</p>
                              <p class="time">2013 - 2015</p>
                            </div>
                          </u-animate>
                        </li>
                        <li>
                          <u-animate
                            :offset="100"
                            name="fadeInLeftShort"
                            duration="0.3s"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Freelance Web Developer</h3>
                              <p class="mb-2">at WebLB Designs</p>
                              <p class="time">2007 - 2013</p>
                            </div>
                          </u-animate>
                        </li>
                      </ul>
                    </u-animate-container>
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
                          <i class="ion-ios-snowy" />
                          <h5 class="use-text-subtitle2">Leadership</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :value="play ? 75 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-wand" />
                          <h5 class="use-text-subtitle2">JAMstack</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :value="play ? 93 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-social-dribbble-outline" />
                          <h5 class="use-text-subtitle2">DevOps</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :value="play ? 85 : 0"
                          color="none"                  
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-world-outline" />
                          <h5 class="use-text-subtitle2">CI/CD</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :value="play ? 80 : 0"
                          color="none"    
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-trending-up-sharp" />
                          <h5 class="use-text-subtitle2">Agile Planning</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :value="play ? 86 : 0"
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
import Hidden from '../Hidden'
import brand from '~/static/text/brand'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      loaded: false,
      brand: brand,
      play: false
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      const top = this.offsetTop - window.innerHeight + 400
      if (window.scrollY > top) {
        return (this.play = true)
      }
      return false
    }
  },
  computed: {
    offsetTop: function() {
      const elm = document.getElementById('timeline')
      return elm.getBoundingClientRect().y
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
