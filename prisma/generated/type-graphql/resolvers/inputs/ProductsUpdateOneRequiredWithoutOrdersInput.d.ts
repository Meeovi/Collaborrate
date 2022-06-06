import { ProductsCreateOrConnectWithoutOrdersInput } from "../inputs/ProductsCreateOrConnectWithoutOrdersInput";
import { ProductsCreateWithoutOrdersInput } from "../inputs/ProductsCreateWithoutOrdersInput";
import { ProductsUpdateWithoutOrdersInput } from "../inputs/ProductsUpdateWithoutOrdersInput";
import { ProductsUpsertWithoutOrdersInput } from "../inputs/ProductsUpsertWithoutOrdersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutOrdersInput {
    create?: ProductsCreateWithoutOrdersInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: ProductsUpsertWithoutOrdersInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutOrdersInput | undefined;
}
