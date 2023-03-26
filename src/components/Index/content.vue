<template>
  <div>
    <div class="content-body">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-card :style="{ backgroundColor: cardColor }" :body-style="{ padding: '0px' }">
            <el-carousel height="450px">

              <el-carousel-item @change="handleChange(item.imgUrl)"  v-for="item in carouselItems" :key="item.id">
                <el-image fit="fit"
                          src="https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg">
                </el-image>
              </el-carousel-item>

            </el-carousel>
          </el-card>
        </el-col>
        <el-col :span="14">
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
      carouselItems: [
        {
          id: 1,
          imgUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahahah'
        },
        {
          id: 2,
          imgUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahahah'
        },
        {
          id: 3,
          imgUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahahah'
        },
        {
          id: 4,
          imgUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahahah'
        },
        {
          id: 5,
          imgUrl: 'https://img.xhnya.top/img/bilibili/fbede2a9ac053f46a009b703554cb24d83ccd8ba.jpg',
          text: 'hahahah'
        }
      ]
    }
  },
  methods: {
    handleChange(val) {
      // 获取当前显示的图片
      const currentImg = this.images[val];

      // 使用 getDominantColor 函数获取主色调
      getDominantColor(currentImg).then(color => {
        this.cardColor = color;
      });
    }

  }

}
</script>

<style scoped>
.content-body {
  padding-left: 8%;
  padding-right: 8%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
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

.el-carousel__indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.el-carousel__indicators .custom-indicators li {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.el-carousel__indicators .custom-indicators li.is-active {
  background-color: #fff;
}

</style>
