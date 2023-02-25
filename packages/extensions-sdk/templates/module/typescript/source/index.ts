import { defineModule } from '@alternatecms/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'custom',
	name: 'Custom',
	icon: 'box',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});
