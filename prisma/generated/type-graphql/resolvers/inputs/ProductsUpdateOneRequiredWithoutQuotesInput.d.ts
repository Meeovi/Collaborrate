import { ProductsCreateOrConnectWithoutQuotesInput } from "../inputs/ProductsCreateOrConnectWithoutQuotesInput";
import { ProductsCreateWithoutQuotesInput } from "../inputs/ProductsCreateWithoutQuotesInput";
import { ProductsUpdateWithoutQuotesInput } from "../inputs/ProductsUpdateWithoutQuotesInput";
import { ProductsUpsertWithoutQuotesInput } from "../inputs/ProductsUpsertWithoutQuotesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutQuotesInput {
    create?: ProductsCreateWithoutQuotesInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutQuotesInput | undefined;
    upsert?: ProductsUpsertWithoutQuotesInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutQuotesInput | undefined;
}
