import { OotoOrderByWithRelationInput } from "../../../inputs/OotoOrderByWithRelationInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";
export declare class AggregateOotoArgs {
    where?: OotoWhereInput | undefined;
    orderBy?: OotoOrderByWithRelationInput[] | undefined;
    cursor?: OotoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
