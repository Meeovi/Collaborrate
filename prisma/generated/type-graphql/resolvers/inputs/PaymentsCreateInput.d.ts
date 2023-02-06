export declare class PaymentsCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    client_id?: string | undefined;
    client_secret?: string | undefined;
    host_uri?: string | undefined;
    redirect_url?: string | undefined;
    redirect_url_app?: string | undefined;
    icon?: string | undefined;
    name: string;
    active?: string | undefined;
    country?: string | undefined;
}
