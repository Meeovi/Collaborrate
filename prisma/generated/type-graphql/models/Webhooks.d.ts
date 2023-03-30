export declare class Webhooks {
    id: bigint;
    created_at?: Date | null;
    name: string;
    url: string;
    headers?: string | null;
    create?: string | null;
    retrieve?: string | null;
    update?: string | null;
    delete?: string | null;
    publish?: string | null;
    unpublish?: string | null;
}
