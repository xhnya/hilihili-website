<template>
  <div>
    <!--    导航-->
    <div class="nav-div-top" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div style="width: 100%;padding-top: 10px;">
        <el-row :gutter="20" align="middle">
          <el-col :span="9" style="text-align: left">
            <ul class="left-entry">
              <li class="nav-text">
                首页
              </li>
              <li  class="nav-text">
                番剧
              </li>
              <li  class="nav-text">
                直播
              </li>
              <li  class="nav-text">
                游戏中心
              </li>
              <li  class="nav-text">
                会员购
              </li>
              <li  class="nav-text">
                赛事
              </li>
              <li  class="nav-text">
                下载客户端
              </li>
            </ul>
          </el-col>

          <!--        中间搜索框-->
          <el-col :span="6" style="text-align: center;">
            <el-input style="width: 70%" v-model="input" placeholder="Please input">
              <template #suffix>
                <el-icon class="el-input__icon">
                  <Search/>
                </el-icon>
              </template>
            </el-input>
          </el-col>
          <el-col :span="9" style="text-align: right;">
            <ul class="left-entry" style="justify-content: flex-end;">
              <li class="nav-text">
                头像
              </li>
              <li  class="nav-text">
                大会员
              </li >
              <li  class="nav-text">
                消息
              </li>
              <li  class="nav-text">
                动态
              </li>
              <li  class="nav-text">
                收藏
              </li>
              <li  class="nav-text">
                历史
              </li>
              <li  class="nav-text">
                创作中心
              </li>
              <li>
                投稿
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const imageUrl =ref('https://img.xhnya.top/img/bilibili/ba5cd3169f8917a807eb7252b7dec8ce463b1aec.png%401c.webp')

</script>

<style scoped>
@import '@/styles/light.css';

.left-entry {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 30px;

}

.left-entry li {
  padding-right: 20px;
}

.nav-div-top {
  height: 10%;
  background-size: auto 100%;

}
.nav-text{
  color: var(--Ga0);
}
</style>