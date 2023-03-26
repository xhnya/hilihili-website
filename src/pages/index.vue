<template>
  <div class="index-body">
    <PageHead></PageHead>
    <Content></Content>
    <FeedRollBtn></FeedRollBtn>
    <p>index</p>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead/PageHead.vue";
import Content from "@/components/Index/content.vue";
import FeedRollBtn from "@/components/Index/FeedRollBtn/FeedRollBtn.vue";

export default {
  data() {
    return {}
  },
  components: {
    PageHead,
    FeedRollBtn,
    Content
  },
  methods: {}
}
</script>

<style scoped>
.index-body{
  background: var(--bg1);
}
</style>
