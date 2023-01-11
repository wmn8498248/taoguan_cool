<template>
	<div class="hot-search">
		<div class="hot-search__header">
			<span>套管信息</span>
		</div>

		<div class="hot-search__container">
			<el-row class="hot-search__chart" :gutter="100">
				<el-col :md="24" :xs="24">
					<div class="block">
						<v-chart
							style="width: 100%; height: 240px"
							:option="chartOption"
							autoresize
						/>
					</div>
				</el-col>
			</el-row>

			<div class="hot-search__table">
				<cl-crud @load="onLoad">
					<el-row>
						<cl-table
							:auto-height="false"
							:props="{
								border: false,
								'default-sort': {
									prop: 'ud',
									order: 'descending'
								}
							}"
							:context-menu="false"
							:columns="[
								{
									label: '排名',
									prop: 'index',
									width: 60
								},
								{
									label: '名称',
									prop: 'keyWord',
									'min-width': 100
								},
								{
									label: '电流',
									prop: 'users',
									'min-width': 100
								},
								{
									label: '相电压',
									prop: 'ud',
									'min-width': 100
								},
								{
									label: '电容',
									prop: 'users',
									'min-width': 100
								},
								{
									label: '介损',
									prop: 'users',
									'min-width': 100
								}
							]"
						/>
					</el-row>
				</cl-crud>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
// import * as echarts from "echarts";

export default defineComponent({
	setup() {

		const list = ref<any[]>([]);

		const chartOption = reactive({
			grid: {
				top: "40px",
				bottom: "10px",
				left: "20px",
				right: "20px",
				containLabel: true
			},
			title: {
				text: "套管A"
			},
			tooltip: {
				trigger: "axis"
			},
			legend: {},
			toolbox: {
				show: true,
				feature: {
					dataZoom: {
						yAxisIndex: "none"
					},
					dataView: { readOnly: false },
					magicType: { type: ["line", "bar"] },
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis: {
				type: "category",
				boundaryGap: false,
				data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
			},
			yAxis: {
				type: "value",
				axisLabel: {
					formatter: "{value} °C"
				}
			},
			series: [
				{
					name: "Highest",
					type: "line",
					data: [10, 11, 13, 11, 12, 12, 9],
					markPoint: {
						data: [
							{ type: "max", name: "Max" },
							{ type: "min", name: "Min" }
						]
					},
					markLine: {
						data: [{ type: "average", name: "Avg" }]
					}
				}
			]
		});

		function onLoad({ ctx, app }: any) {
			ctx.service({
				page() {
					return Promise.resolve({
						list: [
							{
								index: 1,
								keyWord: "套管A",
								users: 983,
								ud: 5
							},
							{
								index: 1,
								keyWord: "套管B",
								users: 763,
								ud: -3
							},
							{
								index: 1,
								keyWord: "套管C",
								users: 328,
								ud: 7
							},
							{
								index: 1,
								keyWord: "套管D",
								users: 144,
								ud: 4
							},
							{
								index: 1,
								keyWord: "套管E",
								users: 121,
								ud: -1
							}
						]
					});
				}
			}).done();
			app.refresh();
		}

		return { chartOption, onLoad };
	}
});
</script>

<style lang="scss">
.hot-search {
	&__header {
		display: flex;
		align-items: center;
		height: 50px;
		font-size: 15px;
		font-weight: bold;
		padding: 0 20px;
	}

	&__chart {
		padding: 0 20px;

		.block {
			margin: 10px 0;

			.count {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10px;
				height: 40px;

				.fall,
				.rise {
					display: flex;
					align-items: center;
					margin-left: 10px;
					font-size: 15px;
				}

				.fall {
					color: #13ae7c;
				}

				.rise {
					color: #f21e37;
				}

				.number {
					display: flex;
					align-items: center;

					span {
						font-size: 13px;

						&:last-child {
							margin-left: 10px;
							font-size: 15px;
							font-weight: bold;
						}
					}
				}
			}

			.echarts {
				height: 50px;
				width: 100%;
			}
		}
	}

	&__table {
		padding: 10px;

		.el-table {
			&__header {
				th {
					background-color: #fff !important;
				}
			}
		}
	}
}
</style>
