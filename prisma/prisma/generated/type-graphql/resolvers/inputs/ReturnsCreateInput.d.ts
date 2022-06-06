import { CustomersCreateNestedOneWithoutReturnsInput } from "../inputs/CustomersCreateNestedOneWithoutReturnsInput";
import { ProductsCreateNestedOneWithoutReturnsInput } from "../inputs/ProductsCreateNestedOneWithoutReturnsInput";
export declare class ReturnsCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    name?: string | undefined;
    validity?: string | undefined;
    return_prefix?: string | undefined;
    customers?: CustomersCreateNestedOneWithoutReturnsInput | undefined;
    products?: ProductsCreateNestedOneWithoutReturnsInput | undefined;
}
