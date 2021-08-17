import { EnvironmentEndpoint } from '~/environments/environment.endpoint';

export const Environment = {
	production: false,
	appName: 'とくナビ管理システムDev',
	appVersion: '1',
	appSerectKey: 'APUPA4847644695B2628E79C8C7B7',
	defaults: {
		images: {
			avatar: '../assets/images/icons/default-avatar.png',
			imageNotFound: '../assets/images/icons/image_not_found.png',
		},
	},
	host: 'https://apis-v2.tokunabi.com/apis/system',
	endpoint: EnvironmentEndpoint,
	slackEndpoint: {
		webhook: '',
	},
	awsEndpoint: {
		accessKeyId: '',
		secectAccessKeyId: '',
		region: {
			defaultRegion: '',
		},
		bucket: {
			defaultBucket: '',
		}
	},
	googleEndpoint: {
		fireBase: {
			key: '',
		},
		markerUrl: '',
		gaTrackerId: '',
	},
	validators: {
		patterns: {
			email: '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}',
			phone: '^(0([1-9]{1}-?[1-9]d{3}|[1-9]{2}-?d{3}|[1-9]{2}d{1}-?d{2}|[1-9]{2}d{2}-?d{1})-?d{4}|0[789]0-?d{4}-?d{4}|050-?d{4}-?d{4})$',
			postalCode: '[0-9]{3,3}-[0-9]{4,4}',
			onlyAnphabet: '[A-Za-z]+$',
			onlyNumeric: '^[0-9]+$',
			aanphabetNumeric: '^[A-Za-z0-9 ]+$',
			anphabetNumericWithoutWhiteSpace: '^[A-Za-z0-9]+$',
			anphabetFullJapanese: '^[一-龯ぁ-んァ-ンｧ-ﾝﾞﾟＡ-ｚ a-zA-Z ]+$',
			anphabetHiragana: '^[ァ-ンｧ-ﾝﾞﾟＡ-ｚ a-zA-Z ]+$',
			onlyHiragana: '^[ぁ-んﾞﾟ]+$',
			onlyKatakana: '^[ァ-ンｧ-ﾝﾞﾟ]+$',
		},
	},
};
