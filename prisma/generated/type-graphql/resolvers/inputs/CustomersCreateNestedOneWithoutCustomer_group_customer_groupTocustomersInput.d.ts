import { CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput {
    create?: CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
