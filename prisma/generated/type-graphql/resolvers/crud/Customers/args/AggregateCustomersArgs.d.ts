import { CustomersOrderByWithRelationInput } from "../../../inputs/CustomersOrderByWithRelationInput";
import { CustomersWhereInput } from "../../../inputs/CustomersWhereInput";
import { CustomersWhereUniqueInput } from "../../../inputs/CustomersWhereUniqueInput";
export declare class AggregateCustomersArgs {
    where?: CustomersWhereInput | undefined;
    orderBy?: CustomersOrderByWithRelationInput[] | undefined;
    cursor?: CustomersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
