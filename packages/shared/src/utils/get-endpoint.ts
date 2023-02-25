export function getEndpoint(collection: string): string {
	if (collection.startsWith('alternatecms_')) {
		return `/${collection.substring(9)}`;
	}

	return `/items/${collection}`;
}
