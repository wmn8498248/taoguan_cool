import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
	Router,
	RouteRecordRaw
} from "vue-router";
import { routerMode } from "/@/config/env"; 

declare interface CoolRouter extends Router {
	$plugin?: {
		addViews(list: any[], options?: any): void;
	};
}

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "index",
		component: () => import(`/@/pages/layout/index.vue`),
		children: [
			{
				path: "/",
				name: "套管监测",
				component: () => import("/@/views/home/test.vue")
			},
			
			{///views/dashboard/admin/index.vue
				path: 'dashboard',
				component: () => import('/@/views/dashboard/admin/index.vue'),
				meta: {
				  title: '首页',
				  icon: 'home',
				  affix: true,
				},
			},
		]
	},
	
	{
		path: "/:catchAll(.*)",
		name: "404",
		redirect: "/404"
	}
];

const router = createRouter({
	history: routerMode == "history" ? createWebHistory() : createWebHashHistory(),
	routes
}) as CoolRouter;

export default router;

export const ignore: any = {
	token: ["/login", "/403", "/404", "/500", "/502"]
};
