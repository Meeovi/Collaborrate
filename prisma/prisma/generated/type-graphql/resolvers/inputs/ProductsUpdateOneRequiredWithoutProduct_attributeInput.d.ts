import { ProductsCreateOrConnectWithoutProduct_attributeInput } from "../inputs/ProductsCreateOrConnectWithoutProduct_attributeInput";
import { ProductsCreateWithoutProduct_attributeInput } from "../inputs/ProductsCreateWithoutProduct_attributeInput";
import { ProductsUpdateWithoutProduct_attributeInput } from "../inputs/ProductsUpdateWithoutProduct_attributeInput";
import { ProductsUpsertWithoutProduct_attributeInput } from "../inputs/ProductsUpsertWithoutProduct_attributeInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsUpdateOneRequiredWithoutProduct_attributeInput {
    create?: ProductsCreateWithoutProduct_attributeInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutProduct_attributeInput | undefined;
    upsert?: ProductsUpsertWithoutProduct_attributeInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
    update?: ProductsUpdateWithoutProduct_attributeInput | undefined;
}
