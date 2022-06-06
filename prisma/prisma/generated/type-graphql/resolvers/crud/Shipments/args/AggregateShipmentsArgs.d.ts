import { ShipmentsOrderByWithRelationInput } from "../../../inputs/ShipmentsOrderByWithRelationInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";
export declare class AggregateShipmentsArgs {
    where?: ShipmentsWhereInput | undefined;
    orderBy?: ShipmentsOrderByWithRelationInput[] | undefined;
    cursor?: ShipmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
