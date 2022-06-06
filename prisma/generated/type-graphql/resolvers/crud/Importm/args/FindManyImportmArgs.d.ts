import { ImportmOrderByWithRelationInput } from "../../../inputs/ImportmOrderByWithRelationInput";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";
import { ImportmWhereUniqueInput } from "../../../inputs/ImportmWhereUniqueInput";
export declare class FindManyImportmArgs {
    where?: ImportmWhereInput | undefined;
    orderBy?: ImportmOrderByWithRelationInput[] | undefined;
    cursor?: ImportmWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "file" | "url" | "image"> | undefined;
}
