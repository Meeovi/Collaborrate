import { ShipmentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ShipmentsOrderByWithRelationAndSearchRelevanceInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";
export declare class AggregateShipmentsArgs {
    where?: ShipmentsWhereInput | undefined;
    orderBy?: ShipmentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ShipmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
