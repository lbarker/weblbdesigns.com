<template>
  <div>
    <section id="home" />
    <div class="main-wrap">
      <main-header invert />
      <div class="container-wrap">
        <section class="space-top space-bottom">
          <h2 class="use-text-title2 text-center mb-4">
            {{ $t('common.title') }}
          </h2>
          <h4 class="use-text-subtitle2 text-center">
            {{ $t('common.subtitle') }}
          </h4>
        </section>
      </div>
      <notification />
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
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  margin-top: section-margin($spacing1);
}
.container-wrap {
  margin-top: $spacing10;
  padding: $spacing4;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '@/components/Header';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';

export default {
  components: {
    'main-header': Header,
    Notification,
  },
  head() {
    return {
      title: brand.profile.name + ' - Blank Page',
    };
  },
};
</script>
