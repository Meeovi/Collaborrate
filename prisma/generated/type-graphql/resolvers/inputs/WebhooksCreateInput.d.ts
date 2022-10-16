export declare class WebhooksCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    name: string;
    url: string;
    headers?: string | undefined;
    create?: string | undefined;
    retrieve?: string | undefined;
    update?: string | undefined;
    delete?: string | undefined;
    publish?: string | undefined;
    unpublish?: string | undefined;
}
