import { APP_EXTENSION_TYPES, API_EXTENSION_TYPES, HYBRID_EXTENSION_TYPES } from '@alternatecms/shared/constants';
import { ExtensionType } from '@alternatecms/shared/types';
import { isIn } from '@alternatecms/shared/utils';
import { Language } from '../../types';
import getPackageVersion from '../../utils/get-package-version';
import getSdkVersion from '../../utils/get-sdk-version';

export default async function getExtensionDevDeps(
	type: ExtensionType | ExtensionType[],
	language: Language | Language[] = []
): Promise<Record<string, string>> {
	const types = Array.isArray(type) ? type : [type];
	const languages = Array.isArray(language) ? language : [language];

	const deps: Record<string, string> = {
		'@alternatecms/extensions-sdk': getSdkVersion(),
	};

	if (languages.includes('typescript')) {
		if (types.some((type) => isIn(type, [...API_EXTENSION_TYPES, ...HYBRID_EXTENSION_TYPES]))) {
			deps['@types/node'] = `^${await getPackageVersion('@types/node')}`;
		}

		deps['typescript'] = `^${await getPackageVersion('typescript')}`;
	}

	if (types.some((type) => isIn(type, [...APP_EXTENSION_TYPES, ...HYBRID_EXTENSION_TYPES]))) {
		deps['vue'] = `^${await getPackageVersion('vue')}`;
	}

	return deps;
}
