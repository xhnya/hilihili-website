<template>
  <!--登录-->
  <div style="width: 100%">
    <el-dialog
        v-model="dialogVisible"
        width="36%"
        :align-center="true"
        :close-on-click-modal="false"
    >
      <div>
        <el-row justify="center">
          <el-col :span="6"  align="middle">
            <span style="font-size: 20px">扫描二维码登录</span>
            <div style="margin-top: 30px;">
              <a-qrcode  :value="text" />
            </div>
            <div  style="margin-top: 15px;">
              <span>扫码登录或者下载APP</span>
            </div>
          </el-col>
          <el-col :span="18">

          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>

import {ref} from "vue";
const text = ref('https://www.antdv.com/');

let dialogVisible = ref(false)


const dialogOpen = () => {
  dialogVisible.value = true
}

defineExpose({
  dialogOpen
})


</script>
<style scoped>


</style>