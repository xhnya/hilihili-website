<template>
  <div>
    <el-card style="width: 50%">
      <div>
        <el-row :gutter="20">
          <el-col :span="8">
            <h3>扫描二维码登录</h3>
            <div></div>
          </el-col>
          <el-col :span="16">
            <div>
              <el-tabs type="border-card">
                <el-tab-pane label="密码登录">
                  <el-input v-model="input3" class="w-50 m-2" placeholder="请输入账号">
                    <template #prefix>
                      <span class="login-input-text">账号</span>
                    </template>
                  </el-input>
                </el-tab-pane>
                <el-tab-pane label="手机登录">手机登录</el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script  setup>
import { ref } from "vue";
</script>

<style lang="less" scoped>
.title-tab-text {
  font-size: var(title-tab-text);
}
.login-input-text{
  color: var(--Ba0);
}
</style>
