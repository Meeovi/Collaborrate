import { ProductsCreateOrConnectWithoutCredit_memosInput } from "../inputs/ProductsCreateOrConnectWithoutCredit_memosInput";
import { ProductsCreateWithoutCredit_memosInput } from "../inputs/ProductsCreateWithoutCredit_memosInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutCredit_memosInput {
    create?: ProductsCreateWithoutCredit_memosInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutCredit_memosInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
