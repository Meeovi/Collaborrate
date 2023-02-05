export declare class EmailsCreateInput {
    created_at?: Date | undefined;
    subject?: string | undefined;
    content?: string | undefined;
    cust_id: number;
    bcc?: string | undefined;
    cc?: string | undefined;
    from?: string | undefined;
    media?: string | undefined;
    staff_id?: number | undefined;
    customers?: string | undefined;
    users?: string | undefined;
}
