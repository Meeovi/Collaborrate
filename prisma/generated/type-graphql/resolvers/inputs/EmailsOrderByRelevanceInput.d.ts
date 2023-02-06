export declare class EmailsOrderByRelevanceInput {
    fields: Array<"subject" | "content" | "bcc" | "cc" | "from" | "media" | "customers" | "users">;
    sort: "asc" | "desc";
    search: string;
}
