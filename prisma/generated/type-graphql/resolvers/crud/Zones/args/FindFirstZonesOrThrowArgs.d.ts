import { ZonesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ZonesOrderByWithRelationAndSearchRelevanceInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";
export declare class FindFirstZonesOrThrowArgs {
    where?: ZonesWhereInput | undefined;
    orderBy?: ZonesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ZonesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "updated_at" | "scope" | "type" | "country" | "code"> | undefined;
}
