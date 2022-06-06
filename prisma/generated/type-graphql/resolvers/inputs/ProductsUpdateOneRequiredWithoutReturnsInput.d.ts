import { ProductsCreateOrConnectWithoutReturnsInput } from "../inputs/ProductsCreateOrConnectWithoutReturnsInput";
import { ProductsCreateWithoutReturnsInput } from "../inputs/ProductsCreateWithoutReturnsInput";
import { ProductsUpdateWithoutReturnsInput } from "../inputs/ProductsUpdateWithoutReturnsInput";
import { ProductsUpsertWithoutReturnsInput } from "../inputs/ProductsUpsertWithoutReturnsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutReturnsInput {
    create?: ProductsCreateWithoutReturnsInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutReturnsInput | undefined;
    upsert?: ProductsUpsertWithoutReturnsInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutReturnsInput | undefined;
}
