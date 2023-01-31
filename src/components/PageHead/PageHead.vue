<template>
  <div class="bili-header large-header">
    <bili-header__bar/>
    <bili-header__banner/>
    <bili-header__channel/>
    <!---->
  </div>
</template>


<script>

import BiliHeader__bar from "@/components/PageHead/bili-header__bar.vue";
import BiliHeader__banner from "@/components/PageHead/bili-header__banner.vue";
import BiliHeader__channel from "@/components/PageHead/bili-header__channel.vue";
export default {
  components: {BiliHeader__channel, BiliHeader__banner, BiliHeader__bar}
}
</script>

<style scoped>

</style>
