import { ReturnsOrderByWithRelationInput } from "../../../inputs/ReturnsOrderByWithRelationInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";
export declare class AggregateReturnsArgs {
    where?: ReturnsWhereInput | undefined;
    orderBy?: ReturnsOrderByWithRelationInput[] | undefined;
    cursor?: ReturnsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
