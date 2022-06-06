import { CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput {
    create?: CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput | undefined;
    upsert?: CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput | undefined;
}
