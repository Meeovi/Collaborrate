import { ProductsCreateOrConnectWithoutRatingInput } from "../inputs/ProductsCreateOrConnectWithoutRatingInput";
import { ProductsCreateWithoutRatingInput } from "../inputs/ProductsCreateWithoutRatingInput";
import { ProductsUpdateWithoutRatingInput } from "../inputs/ProductsUpdateWithoutRatingInput";
import { ProductsUpsertWithoutRatingInput } from "../inputs/ProductsUpsertWithoutRatingInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutRatingInput {
    create?: ProductsCreateWithoutRatingInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutRatingInput | undefined;
    upsert?: ProductsUpsertWithoutRatingInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutRatingInput | undefined;
}
