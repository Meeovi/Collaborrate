import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { CustomersWhereInput } from "../../../inputs/CustomersWhereInput";
import { CustomersWhereUniqueInput } from "../../../inputs/CustomersWhereUniqueInput";
export declare class AggregateCustomersArgs {
    where?: CustomersWhereInput | undefined;
    orderBy?: CustomersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CustomersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
