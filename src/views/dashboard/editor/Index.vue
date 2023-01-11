<!--
 * @Description: 编辑权限主页
 * @Author: ZY
 * @Date: 2021-01-16 15:16:47
 * @LastEditors: SCY
 * @LastEditTime: 2021-04-02 09:42:20
-->

<template>
  <div class="dashboard-editor-container scroller1">
    <div class="clearfix">
      <PanThumb
        :image="avatar"
        style="float: left"
      >
        Your roles:
        <span
          v-for="item in roles"
          :key="item"
          class="info-roles"
        >{{ item }}</span>
      </PanThumb>
      <GithubCorner style="position: absolute; top: 0px; border: 0; right: 0;" />
      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">Editor's Dashboard</span>
      </div>
    </div>
    <div>
      <img
        :src="emptyGif"
        class="emptyGif"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import PanThumb from '/@/cool/modules/base/components/pan-thumb/Index.vue'
import GithubCorner from '/@/cool/modules/base/components/github-corner/Index.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PanThumb,
    GithubCorner
  },
  setup() {
    const emptyGif = 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    const store = useStore() 
    
    console.log(store, "测试————store——————————————")

    const name = computed(() => {
      return "老马"
      // return store.state.user.name
    })
    const avatar = computed(() => {
      return "https://n.sinaimg.cn/translate/w402h363/20180213/bg7r-fyrpeie1413753.jpg"
      // return store.state.user.avatar
    })
    const roles = computed(() => {
      return "admin"
      // return store.state.user.roles
    })

    return {
      emptyGif,
      name,
      avatar,
      roles
    }
  }
})
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;

  .info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }

  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;

    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
