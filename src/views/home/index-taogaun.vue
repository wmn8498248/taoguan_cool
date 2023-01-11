<template>
	<div class="view-home scroller1">
		<el-row :gutter="15">
			<el-col :lg="24" :sm="24">
				<div class="card card--last">
					<taoguan-list />
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="15">
			<el-col :lg="10" :md="24" :xs="24">
				<div class="card">
					<tab-chart />
				</div>
			</el-col>
			<el-col :lg="14" :md="24" :xs="24">
				<div class="card">
					<taoguan-table />
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import TabChart from "./components/taoguan-tab.vue";

import taoguanList from "./components/taogaun-list.vue";

import taoguanTable from "./components/taoguan-table.vue";
import { useCool } from "/@/cool";

export default defineComponent({
	components: {
		TabChart,
		taoguanList,
		taoguanTable
	},
	name: "tanguanHome",


	setup() {
		const { service, refs, setRefs } = useCool();
		let bushingsData = [];
		let typeData = [];
		function getTbushingAll() {
			service.base.home
				.tbushingAll()
				.then((res: any) => {
					console.log(res, "返回数据__________________");
					//  bushingsData = ref(res.bushings)
					//  typeData = ref(res.type)
				})
				.catch((err: string) => {
					// ElMessage.error(err);
					console.log("错误返回catch");
				});
		}

		

		onMounted(() => {
			getTbushingAll();
		});

		return {
			// bushingsData, typeDatas
		}
	}
});
</script>

<style lang="scss">
.view-home {
	.card {
		background-color: #fff;
		border-radius: 5px;
		margin-bottom: 15px;
		font-size: 12px;
		letter-spacing: 0.5px;

		&__header {
			display: flex;
			align-items: center;
			height: 50px;
			padding: 0 20px;

			.label {
				font-size: 12px;
			}

			.value {
				font-size: 18px;
				font-weight: bold;
				margin-left: 10px;
			}
		}

		&__container {
			padding: 0 20px;
			height: 50px;
		}

		&__footer {
			display: flex;
			align-items: center;
			height: 50px;
			border-top: 1px solid #f7f7f7;
			font-size: 12px;
			margin: 0 5px;
			padding: 0 15px;
			box-sizing: border-box;

			.label {
				margin-right: 10px;
			}

			.value {
				font-size: 13px;
			}
		}
	}
}
</style>
