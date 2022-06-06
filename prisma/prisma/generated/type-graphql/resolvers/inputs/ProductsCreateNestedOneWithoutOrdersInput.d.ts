import { ProductsCreateOrConnectWithoutOrdersInput } from "../inputs/ProductsCreateOrConnectWithoutOrdersInput";
import { ProductsCreateWithoutOrdersInput } from "../inputs/ProductsCreateWithoutOrdersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutOrdersInput {
    create?: ProductsCreateWithoutOrdersInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
