import { PrimaryKey } from './items';

export type Notification = {
	id: string;
	status: string;
	timestamp: string;
	recipient: string;
	sender: string | null;
	subject: string;
	message: string | null;
	collection: string | null;
	item: PrimaryKey | null;
};
