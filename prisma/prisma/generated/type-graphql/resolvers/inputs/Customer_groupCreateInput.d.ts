import { CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput";
export declare class Customer_groupCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    name?: string | undefined;
    tax_class?: string | undefined;
    customers?: CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput | undefined;
}
