import { ProductsCreateOrConnectWithoutTax_ruleInput } from "../inputs/ProductsCreateOrConnectWithoutTax_ruleInput";
import { ProductsCreateWithoutTax_ruleInput } from "../inputs/ProductsCreateWithoutTax_ruleInput";
import { ProductsUpdateWithoutTax_ruleInput } from "../inputs/ProductsUpdateWithoutTax_ruleInput";
import { ProductsUpsertWithoutTax_ruleInput } from "../inputs/ProductsUpsertWithoutTax_ruleInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutTax_ruleInput {
    create?: ProductsCreateWithoutTax_ruleInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutTax_ruleInput | undefined;
    upsert?: ProductsUpsertWithoutTax_ruleInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutTax_ruleInput | undefined;
}
