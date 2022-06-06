import { ProductsCreateOrConnectWithoutCouponsInput } from "../inputs/ProductsCreateOrConnectWithoutCouponsInput";
import { ProductsCreateWithoutCouponsInput } from "../inputs/ProductsCreateWithoutCouponsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutCouponsInput {
    create?: ProductsCreateWithoutCouponsInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutCouponsInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
