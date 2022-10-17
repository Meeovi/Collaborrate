import { Customer_groupOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_groupOrderByWithRelationAndSearchRelevanceInput";
import { Customer_groupWhereInput } from "../../../inputs/Customer_groupWhereInput";
import { Customer_groupWhereUniqueInput } from "../../../inputs/Customer_groupWhereUniqueInput";
export declare class AggregateCustomer_groupArgs {
    where?: Customer_groupWhereInput | undefined;
    orderBy?: Customer_groupOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Customer_groupWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
