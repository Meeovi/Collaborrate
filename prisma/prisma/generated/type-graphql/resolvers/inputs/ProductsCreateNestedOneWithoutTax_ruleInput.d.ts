import { ProductsCreateOrConnectWithoutTax_ruleInput } from "../inputs/ProductsCreateOrConnectWithoutTax_ruleInput";
import { ProductsCreateWithoutTax_ruleInput } from "../inputs/ProductsCreateWithoutTax_ruleInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutTax_ruleInput {
    create?: ProductsCreateWithoutTax_ruleInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutTax_ruleInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
