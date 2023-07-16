<template>
  <div style="width: 100%" class="common-layout">
    <el-container style="width: 100%">
      <el-header style="margin: 0;padding: 0;width: 100%" height="20vh"><NavigationBar /></el-header>
      <el-main>
        <IndexCenter></IndexCenter>
      </el-main>
    </el-container>
  </div>
  <!--  <div>-->
  <!--    <div>-->
  <!--      <NavigationBar/>-->
  <!--    </div>-->
  <!--  </div>-->
</template>
<script setup>
import { testHttp } from '@/api/user/index.ts'
import { onMounted } from 'vue'
import NavigationBar from '@/components/Index/NavigationBar.vue'
import IndexCenter from "@/components/Index/IndexCenter.vue";

onMounted(() => {
  testHttpIndex()
})

const testHttpIndex = () => {
  testHttp().then((res) => {
    console.log(res)
  })
}
</script>
<style scoped></style>
