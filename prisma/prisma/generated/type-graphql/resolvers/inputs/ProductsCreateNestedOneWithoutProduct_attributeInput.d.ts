import { ProductsCreateOrConnectWithoutProduct_attributeInput } from "../inputs/ProductsCreateOrConnectWithoutProduct_attributeInput";
import { ProductsCreateWithoutProduct_attributeInput } from "../inputs/ProductsCreateWithoutProduct_attributeInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";
export declare class ProductsCreateNestedOneWithoutProduct_attributeInput {
    create?: ProductsCreateWithoutProduct_attributeInput | undefined;
    connectOrCreate?: ProductsCreateOrConnectWithoutProduct_attributeInput | undefined;
    connect?: ProductsWhereUniqueInput | undefined;
}
