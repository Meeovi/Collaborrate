import { ZonesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ZonesOrderByWithRelationAndSearchRelevanceInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";
export declare class AggregateZonesArgs {
    where?: ZonesWhereInput | undefined;
    orderBy?: ZonesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ZonesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
