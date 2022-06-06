import { ProductsCreateOrConnectWithoutRatingInput } from "../inputs/ProductsCreateOrConnectWithoutRatingInput";
import { ProductsCreateWithoutRatingInput } from "../inputs/ProductsCreateWithoutRatingInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutRatingInput {
    create?: ProductsCreateWithoutRatingInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutRatingInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
