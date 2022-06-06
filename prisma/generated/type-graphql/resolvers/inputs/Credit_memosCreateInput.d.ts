import { CustomersCreateNestedOneWithoutCredit_memosInput } from "../inputs/CustomersCreateNestedOneWithoutCredit_memosInput";
import { ProductsCreateNestedOneWithoutCredit_memosInput } from "../inputs/ProductsCreateNestedOneWithoutCredit_memosInput";
export declare class Credit_memosCreateInput {
    credit_memo: string;
    order_number?: number | undefined;
    created?: Date | undefined;
    bill_to_name: string;
    status?: string | undefined;
    refunded?: string | undefined;
    action?: string | undefined;
    id?: bigint | undefined;
    customers?: CustomersCreateNestedOneWithoutCredit_memosInput | undefined;
    products?: ProductsCreateNestedOneWithoutCredit_memosInput | undefined;
}
