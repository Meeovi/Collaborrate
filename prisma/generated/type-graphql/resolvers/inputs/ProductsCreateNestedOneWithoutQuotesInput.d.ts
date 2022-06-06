import { ProductsCreateOrConnectWithoutQuotesInput } from "../inputs/ProductsCreateOrConnectWithoutQuotesInput";
import { ProductsCreateWithoutQuotesInput } from "../inputs/ProductsCreateWithoutQuotesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutQuotesInput {
    create?: ProductsCreateWithoutQuotesInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutQuotesInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
