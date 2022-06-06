import { Product_attribute_setCreateManyProduct_attributeInputEnvelope } from "../inputs/Product_attribute_setCreateManyProduct_attributeInputEnvelope";
import { Product_attribute_setCreateOrConnectWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateOrConnectWithoutProduct_attributeInput";
import { Product_attribute_setCreateWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateWithoutProduct_attributeInput";
import { Product_attribute_setWhereUniqueInput } from "../inputs/Product_attribute_setWhereUniqueInput";
export declare class Product_attribute_setCreateNestedManyWithoutProduct_attributeInput {
    create?: Product_attribute_setCreateWithoutProduct_attributeInput[] | undefined;
    connectOrCreate?: Product_attribute_setCreateOrConnectWithoutProduct_attributeInput[] | undefined;
    createMany?: Product_attribute_setCreateManyProduct_attributeInputEnvelope | undefined;
    connect?: Product_attribute_setWhereUniqueInput[] | undefined;
}
