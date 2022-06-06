import { ProductsCreateOrConnectWithoutReturnsInput } from "../inputs/ProductsCreateOrConnectWithoutReturnsInput";
import { ProductsCreateWithoutReturnsInput } from "../inputs/ProductsCreateWithoutReturnsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutReturnsInput {
    create?: ProductsCreateWithoutReturnsInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutReturnsInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
