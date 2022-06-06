import { ProductsCreateOrConnectWithoutTax_rateInput } from "../inputs/ProductsCreateOrConnectWithoutTax_rateInput";
import { ProductsCreateWithoutTax_rateInput } from "../inputs/ProductsCreateWithoutTax_rateInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutTax_rateInput {
    create?: ProductsCreateWithoutTax_rateInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutTax_rateInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
