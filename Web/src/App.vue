<template>
  <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
}
</script>

<style lang="scss">
$primary: #287ab1;
@import "~bulma";

html {width: 100%; height: 100%}
body {width: 100%; height: 100%}

.columns {
  flex-wrap: wrap;
}
</style>
