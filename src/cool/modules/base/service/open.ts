import { BaseService, Service } from "/@/cool";

@Service("")
class Open extends BaseService {
	/**
	 * 用户登录
	 *
	 * @param {*} { username, password, captchaId, verifyCode }
	 * @returns
	 * @memberof CommonService
	 */
	userLogin({ username, password, captchaId, verifyCode }: any) {
		return this.request({
			url: "/sys/login",
			method: "POST",
			data: "username=" + username+"&password=" + password
		});
	}

	/**
	 * 图片验证码 svg
	 *
	 * @param {*} { height, width }
	 * @returns
	 * @memberof CommonService
	 */
	captcha({ height, width }: any) {
		return this.request({
			url: "/captcha",
			params: {
				height,
				width
			}
		});
	}

	/**
	 * 刷新 token
	 * @param {string} token
	 */
	refreshToken(token: string) {
		return this.request({
			url: "/refreshToken",
			params: {
				refreshToken: token
			}
		});
	}
}

export default Open;
