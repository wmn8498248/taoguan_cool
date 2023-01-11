<template>
	<div class="tab-chart">
		<div class="tab-chart__header">
			<ul class="tab-chart__tab">
				<li class="active">今日报警信息</li>
				<!-- <li>访问量</li> -->
			</ul>

			<!-- <span class="tab-chart__year">2020</span> -->
		</div>

		<div class="tab-chart__container">
			<!-- <div class="filter-container">
				
			</div> -->
			<el-checkbox-group v-model="checkboxVal" class="filter-container">
				<!-- <el-checkbox label="tanguanA"> 套管名称 </el-checkbox> -->
				<!-- size="mini" border -->
				<el-checkbox label="相位" > 相位 </el-checkbox>
				<el-checkbox label="报警类型" > 报警类型 </el-checkbox>
				<el-checkbox label="泄露电流" > 泄露电流 </el-checkbox>
				<el-checkbox label="相对介损" > 相对介损 </el-checkbox>
				<el-checkbox label="相对电容量" > 相对电容量 </el-checkbox>
				<el-checkbox label="处理状态" > 处理状态 </el-checkbox>
				<el-checkbox label="报警时间" > 报警时间 </el-checkbox>
				<el-checkbox label="处理时间" > 处理时间 </el-checkbox>
			</el-checkbox-group>

			<el-table
				:key="key"
				:data="tableData"
				border
				fit
				highlight-current-row
				height="230"
				style="width: 100%"
			>
				<el-table-column prop="name" label="套管名称" width="180" />
				<el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit" width="100%">
					<template #default="{ row }">
						{{ row[fruit] }}
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs, watch } from "vue";

const defaultFormThead = [
	// "tanguanA",
	"相位",
	"报警类型",
	"泄露电流",
	"相对介损",
	"相对电容量",
	"处理状态",
	"报警时间",
	"处理时间"
];
export default defineComponent({
	setup() {
		const dataMap = reactive({
			tableData: [
				{
					name: "套管名称-A",
					相位: "000",
					报警类型: "000",
					泄露电流: "000",
					相对介损: "000",
					相对电容量: "000",
					处理状态: "000",
					报警时间: "000",
					处理时间: "000"
				},
				{
					name: "套管-B",
					相位: "000",
					报警类型: "000",
					泄露电流: "000",
					相对介损: "000",
					相对电容量: "000",
					处理状态: "000",
					报警时间: "000",
					处理时间: "000"
				},
				{
					name: "套管名称-A",
					相位: "000",
					报警类型: "000",
					泄露电流: "000",
					相对介损: "000",
					相对电容量: "000",
					处理状态: "000",
					报警时间: "000",
					处理时间: "000"
				},
				{
					name: "套管-B",
					相位: "000",
					报警类型: "000",
					泄露电流: "000",
					相对介损: "000",
					相对电容量: "000",
					处理状态: "000",
					报警时间: "000",
					处理时间: "000"
				},
				{
					name: "套管名称-A",
					相位: "000",
					报警类型: "000",
					泄露电流: "000",
					相对介损: "000",
					相对电容量: "000",
					处理状态: "000",
					报警时间: "000",
					处理时间: "000"
				},
				{
					name: "套管-B",
					相位: "000",
					报警类型: "000",
					泄露电流: "000",
					相对介损: "000",
					相对电容量: "000",
					处理状态: "000",
					报警时间: "000",
					处理时间: "000"
				},
				{
					name: "套管-B",
					相位: "000",
					报警类型: "000",
					泄露电流: "000",
					相对介损: "000",
					相对电容量: "000",
					处理状态: "000",
					报警时间: "000",
					处理时间: "000"
				}
			],
			key: 1, // Table key
			formTheadOptions: [
				"套管名称",
				"相位",
				"报警类型",
				"泄露电流",
				"相对介损",
				"相对电容量",
				"处理状态",
				"报警时间",
				"处理时间"
			],
			checkboxVal: defaultFormThead,
			formThead: defaultFormThead // Default header
		});

		watch(
			() => dataMap.checkboxVal,
			(value: string[]) => {
				console.log("----------------------");
				dataMap.formThead = dataMap.formTheadOptions.filter((i) => value.indexOf(i) >= 0);
				dataMap.key = dataMap.key + 1; // Ensure the table will be re-rendered each time
			}
		);

		return { ...toRefs(dataMap) };
	}
});
</script>
 
<style lang="scss" scoped>
.tab-chart {
	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 50px;
		padding: 0 20px;

		ul {
			li {
				list-style: none;
				float: left;
				margin-right: 20px;
				font-size: 15px;
				color: #dbdbdb;
				cursor: pointer;

				&.active {
					color: #000;
					font-weight: bold;
				}
			}
		}
	}

	&__year {
		font-size: 14px;
		position: relative;

		&::before {
			display: block;
			content: "";
			height: 8px;
			width: 8px;
			border-radius: 8px;
			background-color: #000;
			position: absolute;
			left: -15px;
			top: 4px;
		}
	}

	&__container {
		// height: 300px;
		padding: 15px;
		.filter-container {
			// display: flex;
			// overflow-x: auto;
			// justify-content: space-between;
		}
		.echarts {
			height: 100%;
			width: 100%;
		}
	}
}
</style>