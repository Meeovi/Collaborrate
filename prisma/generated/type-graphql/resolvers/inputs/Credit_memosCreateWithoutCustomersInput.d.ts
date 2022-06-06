import { ProductsCreateNestedOneWithoutCredit_memosInput } from "../inputs/ProductsCreateNestedOneWithoutCredit_memosInput";
export declare class Credit_memosCreateWithoutCustomersInput {
    credit_memo: string;
    order_number?: number | undefined;
    created?: Date | undefined;
    bill_to_name: string;
    status?: string | undefined;
    refunded?: string | undefined;
    action?: string | undefined;
    id?: bigint | undefined;
    products?: ProductsCreateNestedOneWithoutCredit_memosInput | undefined;
}
