import { CustomersCreateNestedOneWithoutReturnsInput } from "../inputs/CustomersCreateNestedOneWithoutReturnsInput";
export declare class ReturnsCreateWithoutProductsInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    name?: string | undefined;
    validity?: string | undefined;
    return_prefix?: string | undefined;
    customers?: CustomersCreateNestedOneWithoutReturnsInput | undefined;
}
