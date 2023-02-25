import path from 'path';
import fs from 'fs-extra';
import { log } from '../utils/logger';
import { ExtensionManifest } from '@alternatecms/shared/types';

export default async function link(extensionsPath: string): Promise<void> {
	const extensionPath = process.cwd();

	const absoluteExtensionsPath = path.resolve(extensionsPath);

	if (!fs.existsSync(absoluteExtensionsPath)) {
		log(`Extensions folder does not exist at ${absoluteExtensionsPath}`, 'error');
		return;
	}

	const packagePath = path.resolve('package.json');

	if (!(await fs.pathExists(packagePath))) {
		log(`Current directory is not a valid package.`, 'error');
		return;
	}

	let manifestFile: Record<string, any>;

	try {
		manifestFile = await fs.readJSON(packagePath);
	} catch (err) {
		log(`Current directory is not a valid Alternatecms extension.`, 'error');
		return;
	}

	const extensionManifest = ExtensionManifest.parse(manifestFile);

	const extensionName = extensionManifest.name;

	if (!extensionName) {
		log(`Extension name not found in package.json`, 'error');
		return;
	}

	const type = extensionManifest['alternatecms:extension']?.type;

	if (!type) {
		log(`Extension type not found in package.json`, 'error');
		return;
	}

	const extensionTarget = path.join(absoluteExtensionsPath, extensionName);

	try {
		fs.ensureSymlinkSync(extensionPath, extensionTarget);
	} catch (error: any) {
		log(error.message, 'error');
		log(`Try running this command with administrator privileges`, 'info');
		return;
	}

	log(`Linked ${extensionName} to ${extensionTarget}`);

	return;
}
