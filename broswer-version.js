var version = {
	isAndroid() {
		return navigator.userAgent.toLowerCase().indexOf('android')!==-1;
	},

	isIOS() {
		return /iPhone/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent);
	},

	isWindows() {
		return navigator.platform.toLowerCase().indexOf('win') !== -1;
	},

	isMac() {
		return navigator.platform.toLowerCase().indexOf('mac') !== -1;
	},

	isLinux() {
		return navigator.platform.toLowerCase().indexOf('linux') !== -1;
	},

	isMobileBrowser() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	},
	isWeChat() {
		return /MicroMessenger/i.test(navigator.userAgent);
	},

	isChrome() {
		return /Chrome/i.test(navigator.userAgent);
	},

	isFirefox() {
		return /Firefox/i.test(navigator.userAgent);
	},

	isSafari() {
		return /Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
	},

	isIE() {
		return navigator.userAgent.indexOf('MSIE') !== -1 || /Trident.*rv[ :]*11\./.test(navigator.userAgent);
	},

	isIE7() {
		return navigator.userAgent.indexOf('MSIE 7.') !== -1;
	},

	isIE8() {
		return navigator.userAgent.indexOf('MSIE 8.') !=== -1;
	},

	isIE9() {
		return navigator.userAgent.indexOf('MSIE 9.') !=== -1;
	},

	isIE10() {
		return navigator.userAgent.indexOf('MSIE 10.') !=== -1;
	},

	isIE11() {
		return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
	}
};
