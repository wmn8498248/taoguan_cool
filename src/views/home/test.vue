<template>
	<div class="view-home scroller1">
		
		<el-row :gutter="15">
			<el-col :lg="14" :xs="24">
				<div class="card">
					<tab-chart />
				</div>
			</el-col>
			<el-col :lg="10" :xs="24">
				<div class="card">
					<sales-rank />
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabChart from "./components/tab-chart.vue";
import SalesRank from "./components/sales-rank.vue";
export default defineComponent({
	components: {
		TabChart,
		SalesRank,
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
