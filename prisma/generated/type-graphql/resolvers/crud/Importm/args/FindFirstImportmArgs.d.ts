import { ImportmOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ImportmOrderByWithRelationAndSearchRelevanceInput";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";
import { ImportmWhereUniqueInput } from "../../../inputs/ImportmWhereUniqueInput";
export declare class FindFirstImportmArgs {
    where?: ImportmWhereInput | undefined;
    orderBy?: ImportmOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ImportmWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "file" | "url" | "image"> | undefined;
}
