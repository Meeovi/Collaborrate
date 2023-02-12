import { ZonesOrderByWithRelationInput } from "../../../inputs/ZonesOrderByWithRelationInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";
export declare class AggregateZonesArgs {
    where?: ZonesWhereInput | undefined;
    orderBy?: ZonesOrderByWithRelationInput[] | undefined;
    cursor?: ZonesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
