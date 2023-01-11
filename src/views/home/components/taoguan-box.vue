<template>
    <div class="taogaun-box">
        <el-row :gutter="15">
			<el-col :lg="24" :sm="24">
				<div class="card card--last">
					<taoguan-list :testData="123456" />
				</div>
			</el-col>
		</el-row>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    
})
</script>
<style lang="scss" scoped>
.taoguan-box{
    background-clip: #212936;
}
</style>