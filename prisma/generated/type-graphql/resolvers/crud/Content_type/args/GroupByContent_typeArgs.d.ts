import { Content_typeOrderByWithAggregationInput } from "../../../inputs/Content_typeOrderByWithAggregationInput";
import { Content_typeScalarWhereWithAggregatesInput } from "../../../inputs/Content_typeScalarWhereWithAggregatesInput";
import { Content_typeWhereInput } from "../../../inputs/Content_typeWhereInput";
export declare class GroupByContent_typeArgs {
    where?: Content_typeWhereInput | undefined;
    orderBy?: Content_typeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "text" | "number" | "json" | "link" | "email" | "uid" | "date" | "time" | "timestamp" | "boolean" | "rich_text" | "password" | "media" | "database_name">;
    having?: Content_typeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
