import { CustomerOrderByWithRelationInput } from "../../../inputs/CustomerOrderByWithRelationInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
export declare class AggregateCustomerArgs {
    where?: CustomerWhereInput | undefined;
    orderBy?: CustomerOrderByWithRelationInput[] | undefined;
    cursor?: CustomerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
