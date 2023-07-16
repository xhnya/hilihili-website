<template>
  <!--  主页中心-->
  <div style="padding-left: 10%;padding-right: 10%">
    <!--    导航信息-->
    <div>
      <el-row>
        <el-col :span="4">
          动态
          热门
          频道
        </el-col>
        <el-col :span="15">
          <div class="channel-items__left" style="grid-template-columns: repeat(14,1fr);">
            <span  class="desc-index-center">番剧</span>
            <span  class="desc-index-center">国创</span>
            <span  class="desc-index-center">综艺</span>
            <span  class="desc-index-center">动画</span>
            <span  class="desc-index-center">鬼畜</span>
            <span  class="desc-index-center">舞蹈</span>
            <span  class="desc-index-center">娱乐</span>
            <span  class="desc-index-center">科技</span>
            <span  class="desc-index-center">美食</span>
            <span  class="desc-index-center">汽车</span>
            <span  class="desc-index-center">运动</span>
            <span  class="desc-index-center">VLOG</span>
            <span  class="desc-index-center">单机游戏</span>
            <span  class="desc-index-center">公益</span>
            <span  class="desc-index-center">电影</span>
            <span  class="desc-index-center">电视剧</span>
            <span  class="desc-index-center">纪录片</span>
            <span  class="desc-index-center">游戏</span>
            <span  class="desc-index-center">音乐</span>
            <span  class="desc-index-center">影视</span>
            <span  class="desc-index-center">知识</span>
            <span  class="desc-index-center">资讯</span>
            <span  class="desc-index-center">生活</span>
            <span  class="desc-index-center">时尚</span>
            <span  class="desc-index-center">动物圈</span>
            <span  class="desc-index-center">搞笑</span>
            <span  class="desc-index-center">虚拟UP主</span>
            <span  class="desc-index-center">公开课</span>
          </div>
<!--          <el-descriptions :column="14">-->
<!--            <el-descriptions-item style="padding: 0;text-align: center"></el-descriptions-item>-->
<!--            <el-descriptions-item>国创</el-descriptions-item>-->
<!--            <el-descriptions-item>综艺</el-descriptions-item>-->
<!--            <el-descriptions-item>动画</el-descriptions-item>-->
<!--            <el-descriptions-item>鬼畜</el-descriptions-item>-->
<!--            <el-descriptions-item>舞蹈</el-descriptions-item>-->
<!--            <el-descriptions-item>娱乐</el-descriptions-item>-->
<!--            <el-descriptions-item>科技</el-descriptions-item>-->
<!--            <el-descriptions-item>美食</el-descriptions-item>-->
<!--            <el-descriptions-item>汽车</el-descriptions-item>-->
<!--            <el-descriptions-item>运动</el-descriptions-item>-->
<!--            <el-descriptions-item>vlog</el-descriptions-item>-->
<!--            <el-descriptions-item>单机游戏</el-descriptions-item>-->
<!--            <el-descriptions-item>公益</el-descriptions-item>-->
<!--            &lt;!&ndash;第二行&ndash;&gt;-->
<!--          </el-descriptions>-->
        </el-col>
        <el-col :span="5">

          hahah
        </el-col>
      </el-row>
    </div>
    <!--    中心轮播图以及核心视频-->
    <div>

    </div>
    <!--    推荐视频---懒加载-->
    <div>

    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
@import '@/styles/light';
@import '@/styles/map.css';
.desc-index-center{
  width: 100%;
  color:  #61666D;
  height: 30px;
  line-height: 30px;
  background-color:  #F6F7F8;
  border: 1px solid #F1F2F3;
  border-radius: 6px;
}
.channel-items__left{
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-column: span 4;
  grid-gap: 10px;
  grid-template-rows: repeat(2,1fr);
  border-right: 1px solid #E3E5E7;
  padding-right: 30px;
  position: relative;
}
</style>