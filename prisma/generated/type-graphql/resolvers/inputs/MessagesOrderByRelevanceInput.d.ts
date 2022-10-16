export declare class MessagesOrderByRelevanceInput {
    fields: Array<"from" | "subject" | "content" | "sender" | "media" | "customers" | "users">;
    sort: "asc" | "desc";
    search: string;
}
