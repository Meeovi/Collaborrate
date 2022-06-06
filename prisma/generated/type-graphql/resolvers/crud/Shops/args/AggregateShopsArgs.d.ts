import { ShopsOrderByWithRelationInput } from "../../../inputs/ShopsOrderByWithRelationInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";
export declare class AggregateShopsArgs {
    where?: ShopsWhereInput | undefined;
    orderBy?: ShopsOrderByWithRelationInput[] | undefined;
    cursor?: ShopsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
