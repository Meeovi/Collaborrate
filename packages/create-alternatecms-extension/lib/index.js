#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const { EXTENSION_LANGUAGES, EXTENSION_TYPES, BUNDLE_EXTENSION_TYPES } = require('@alternatecms/shared/constants');
const { create } = require('@alternatecms/extensions-sdk/cli');

run();

async function run() {
	// eslint-disable-next-line no-console
	console.log('This utility will walk you through creating a Alternatecms extension.\n');

	const { type, name, language } = await inquirer.prompt([
		{
			type: 'list',
			name: 'type',
			message: 'Choose the extension type',
			choices: EXTENSION_TYPES,
		},
		{
			type: 'input',
			name: 'name',
			message: 'Choose a name for the extension',
		},
		{
			type: 'list',
			name: 'language',
			message: 'Choose the language to use',
			choices: EXTENSION_LANGUAGES,
			when: ({ type }) => BUNDLE_EXTENSION_TYPES.includes(type) === false,
		},
	]);

	await create(type, name, { language });
}