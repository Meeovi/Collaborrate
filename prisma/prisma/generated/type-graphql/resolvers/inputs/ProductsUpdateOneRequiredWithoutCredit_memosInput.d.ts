import { ProductsCreateOrConnectWithoutCredit_memosInput } from "../inputs/ProductsCreateOrConnectWithoutCredit_memosInput";
import { ProductsCreateWithoutCredit_memosInput } from "../inputs/ProductsCreateWithoutCredit_memosInput";
import { ProductsUpdateWithoutCredit_memosInput } from "../inputs/ProductsUpdateWithoutCredit_memosInput";
import { ProductsUpsertWithoutCredit_memosInput } from "../inputs/ProductsUpsertWithoutCredit_memosInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutCredit_memosInput {
    create?: ProductsCreateWithoutCredit_memosInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutCredit_memosInput | undefined;
    upsert?: ProductsUpsertWithoutCredit_memosInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutCredit_memosInput | undefined;
}
