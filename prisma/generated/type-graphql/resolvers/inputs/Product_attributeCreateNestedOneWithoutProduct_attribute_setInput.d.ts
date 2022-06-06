import { Product_attributeCreateOrConnectWithoutProduct_attribute_setInput } from "../inputs/Product_attributeCreateOrConnectWithoutProduct_attribute_setInput";
import { Product_attributeCreateWithoutProduct_attribute_setInput } from "../inputs/Product_attributeCreateWithoutProduct_attribute_setInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";
export declare class Product_attributeCreateNestedOneWithoutProduct_attribute_setInput {
    create?: Product_attributeCreateWithoutProduct_attribute_setInput | undefined;
    connectOrCreate?: Product_attributeCreateOrConnectWithoutProduct_attribute_setInput | undefined;
    connect?: Product_attributeWhereUniqueInput | undefined;
}
