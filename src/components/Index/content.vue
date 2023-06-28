<template>
  <div>
    <div class="content-body">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-card style="height: 450px;" :style="{ backgroundColor: cardColor }" :body-style="{ padding: '0px' }">
            <el-carousel
                arrow="never"
                ref="carouselSet"
                indicator-position="none"
                height="450px">
              <el-carousel-item @change="handleChange(item.imageUrl)" v-for="item in carouselItems" :key="item.id">
                <div class="carousel-item-container">
                  <el-image
                      fit="fill"
                      src="https://img.xhnya.top/img/bilibili/preview.jpg">
                  </el-image>
                  <div>
                    <div class="carousel-text my-carousel-bottom">
                      <div style="margin-left: 10px;">
                        <a href=""><span> {{ item.text }}</span></a>
                        <div>
<!--                          TODO: 动画显示效果，选中的时候的效果-->
                          <ul class="icon-not-gray"><!--[-->
                            <li :key="itemIcon.id" v-for="itemIcon in carouselItems"
                                class="my-icon-is-active">
                              <div class="before"></div>
                              <div class="after"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="buttons not-gray"><!---->
                          <div>
                            <button @click="this.$refs.carouselSet.prev" class="buttons-not-gray">
                              <svg style="transform:rotate(180deg);">
                                <use xlink:href="#widget-arrow"></use>
                              </svg>
                            </button>
                            <button @click="this.$refs.carouselSet.next" class="buttons-not-gray">
                              <svg>
                                <use xlink:href="#widget-arrow"></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-card>
        </el-col>
        <el-col :span="14">
          <!-- TODO: 改成响应式 -->
          <el-row style="margin-bottom: 20px;" :gutter="20">
            <el-col v-for="item in 3" :key="item" :span="8">
              <el-card class="content-body-card" shadow="never" :body-style="{ padding: '0px' }">
                <el-image fit="fit"
                          src="https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg"
                          class="content-card-image">
                </el-image>
                <div class="content-card-text">
                  <span>好吃的汉堡</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col v-for="item in 3" :key="item" :span="8">
              <el-card class="content-body-card" shadow="never" :body-style="{ padding: '0px' }">

                <el-image fit="fill"
                          src="https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg"
                          class="content-card-image">

                </el-image>

                <div class="content-card-text">
                  <span>好吃的汉堡</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>


</template>

<script>

export default {
  name: "content",
  data() {
    return {
      currentDate: new Date(),
      cardColor: '',
      rotationChartCount: 0,
      carouselItems: [
        {
          id: 1,
          imageUrl: 'https://img.xhnya.top/img/bilibili/preview.jpg',
          text: 'hahaxxxhah'
        },
        {
          id: 2,
          imageUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahaasdsadhah'
        },
        {
          id: 3,
          imageUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahaasdsadhah'
        },
        {
          id: 4,
          imageUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'haasdashahah'
        },
        {
          id: 5,
          imageUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahahaadsaceh'
        }
      ]
    }
  },
  methods: {
    handleChange(val) {
      // 获取当前显示的图片
      const currentImg = this.images[val];
      // 获取主色调
      // getImageThemeColor(currentImg).then(color=>{
      //   console.log(color)
      // })
    },
    // getBannerList(){
    //   pageApi.getBannerList().then((res)=>{
    //     console.log(res)
    //   })
    // }


  }

}
</script>

<style scoped>
.content-body {
  padding-left: 8%;
  padding-right: 8%;
}


.content-body-card {
  width: 300px;

}

.content-card-image {
  height: 180px;
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
}

.content-card-text {
  height: 65px;
}

.el-card {
  border: none;

}

.custom-indicators {
  z-index: 1;
}

.custom-indicators li {
  margin: 0 5px;
  cursor: pointer;
  display: inline-block;
}

.custom-indicators li .svg-inline--fa {
  font-size: 14px;
  color: #999;
}

.custom-indicators li.is-active .svg-inline--fa {
  color: #409eff;
}


.carousel-item-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-text {
  position: absolute;
  bottom: 0px;
  left: 0px;
  color: #00AEEC;
  font-size: 18px;
  font-weight: bold;
}

.my-carousel-bottom {
  background-color: #F73809;
  width: 100%;
  height: 80px;
}

.buttons.not-gray {
  bottom: 42px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  z-index: 2;
}

.buttons svg {
  width: 12px;
  height: 12px;
  color: #b9afaf;
}

.buttons-not-gray {
  align-items: center;
  justify-content: center;
  display: inline-flex;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-right: 12px;
  background-color: rgba(255, 255, 255, .1);
}

.icon-not-gray {
  margin-left: -1.5px;
  font-size: 0;
  transform: translateZ(0);
}

.icon-not-gray li {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, .4);
  overflow: hidden;
  cursor: pointer;
}

.my-icon-is-active {
  width: 14px;
  height: 14px;
  margin: 1px;
  background-color: transparent;
}

</style>
