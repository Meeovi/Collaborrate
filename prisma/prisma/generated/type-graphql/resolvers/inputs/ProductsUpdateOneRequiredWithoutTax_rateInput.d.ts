import { ProductsCreateOrConnectWithoutTax_rateInput } from "../inputs/ProductsCreateOrConnectWithoutTax_rateInput";
import { ProductsCreateWithoutTax_rateInput } from "../inputs/ProductsCreateWithoutTax_rateInput";
import { ProductsUpdateWithoutTax_rateInput } from "../inputs/ProductsUpdateWithoutTax_rateInput";
import { ProductsUpsertWithoutTax_rateInput } from "../inputs/ProductsUpsertWithoutTax_rateInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutTax_rateInput {
    create?: ProductsCreateWithoutTax_rateInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutTax_rateInput | undefined;
    upsert?: ProductsUpsertWithoutTax_rateInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutTax_rateInput | undefined;
}
