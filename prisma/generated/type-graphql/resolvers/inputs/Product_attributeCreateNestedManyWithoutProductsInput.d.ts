import { Product_attributeCreateManyProductsInputEnvelope } from "../inputs/Product_attributeCreateManyProductsInputEnvelope";
import { Product_attributeCreateOrConnectWithoutProductsInput } from "../inputs/Product_attributeCreateOrConnectWithoutProductsInput";
import { Product_attributeCreateWithoutProductsInput } from "../inputs/Product_attributeCreateWithoutProductsInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";
export declare class Product_attributeCreateNestedManyWithoutProductsInput {
    create?: Product_attributeCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Product_attributeCreateOrConnectWithoutProductsInput[] | undefined;
    createMany?: Product_attributeCreateManyProductsInputEnvelope | undefined;
    connect?: Product_attributeWhereUniqueInput[] | undefined;
}
