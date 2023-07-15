<template>
  <div style="width: 100%" class="common-layout">
    <el-container>
      <el-header ><NavigationBar/></el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
<!--  <div>-->
<!--    <div>-->
<!--      <NavigationBar/>-->
<!--    </div>-->
<!--  </div>-->
</template>
<script setup>


import {testHttp} from "@/api/user/index.ts";
import {onMounted} from "vue";
import NavigationBar from "@/components/Index/NavigationBar.vue";

onMounted(() => {
  testHttpIndex()
})

const testHttpIndex = () => {
  testHttp().then(res => {
    console.log(res)
  })
}


</script>
<style scoped>
</style>
