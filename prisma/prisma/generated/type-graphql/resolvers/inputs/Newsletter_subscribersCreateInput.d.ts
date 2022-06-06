import { CustomersCreateNestedOneWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateNestedOneWithoutNewsletter_subscribersInput";
export declare class Newsletter_subscribersCreateInput {
    email: string;
    customer_first_name?: string | undefined;
    customer_last_name?: string | undefined;
    store?: string | undefined;
    status?: string | undefined;
    websites?: string | undefined;
    created_at?: Date | undefined;
    customers?: CustomersCreateNestedOneWithoutNewsletter_subscribersInput | undefined;
}
