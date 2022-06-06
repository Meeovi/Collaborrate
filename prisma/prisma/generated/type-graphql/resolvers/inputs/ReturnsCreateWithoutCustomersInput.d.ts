import { ProductsCreateNestedOneWithoutReturnsInput } from "../inputs/ProductsCreateNestedOneWithoutReturnsInput";
export declare class ReturnsCreateWithoutCustomersInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    name?: string | undefined;
    validity?: string | undefined;
    return_prefix?: string | undefined;
    products?: ProductsCreateNestedOneWithoutReturnsInput | undefined;
}
