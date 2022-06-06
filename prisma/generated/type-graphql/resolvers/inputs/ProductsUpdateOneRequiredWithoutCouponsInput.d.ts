import { ProductsCreateOrConnectWithoutCouponsInput } from "../inputs/ProductsCreateOrConnectWithoutCouponsInput";
import { ProductsCreateWithoutCouponsInput } from "../inputs/ProductsCreateWithoutCouponsInput";
import { ProductsUpdateWithoutCouponsInput } from "../inputs/ProductsUpdateWithoutCouponsInput";
import { ProductsUpsertWithoutCouponsInput } from "../inputs/ProductsUpsertWithoutCouponsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutCouponsInput {
    create?: ProductsCreateWithoutCouponsInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutCouponsInput | undefined;
    upsert?: ProductsUpsertWithoutCouponsInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutCouponsInput | undefined;
}
