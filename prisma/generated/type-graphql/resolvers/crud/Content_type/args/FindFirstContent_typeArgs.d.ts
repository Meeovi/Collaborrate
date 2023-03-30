import { Content_typeOrderByWithRelationInput } from "../../../inputs/Content_typeOrderByWithRelationInput";
import { Content_typeWhereInput } from "../../../inputs/Content_typeWhereInput";
import { Content_typeWhereUniqueInput } from "../../../inputs/Content_typeWhereUniqueInput";
export declare class FindFirstContent_typeArgs {
    where?: Content_typeWhereInput | undefined;
    orderBy?: Content_typeOrderByWithRelationInput[] | undefined;
    cursor?: Content_typeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "text" | "number" | "link" | "email" | "uid" | "date" | "time" | "timestamp" | "boolean" | "rich_text" | "password" | "media" | "database_name"> | undefined;
}
