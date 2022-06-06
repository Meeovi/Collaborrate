import { Product_attribute_setCreateManyProduct_attributeInputEnvelope } from "../inputs/Product_attribute_setCreateManyProduct_attributeInputEnvelope";
import { Product_attribute_setCreateOrConnectWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateOrConnectWithoutProduct_attributeInput";
import { Product_attribute_setCreateWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateWithoutProduct_attributeInput";
import { Product_attribute_setScalarWhereInput } from "../inputs/Product_attribute_setScalarWhereInput";
import { Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput } from "../inputs/Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput";
import { Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput } from "../inputs/Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput";
import { Product_attribute_setUpsertWithWhereUniqueWithoutProduct_attributeInput } from "../inputs/Product_attribute_setUpsertWithWhereUniqueWithoutProduct_attributeInput";
import { Product_attribute_setWhereUniqueInput } from "../inputs/Product_attribute_setWhereUniqueInput";
export declare class Product_attribute_setUpdateManyWithoutProduct_attributeInput {
    create?: Product_attribute_setCreateWithoutProduct_attributeInput[] | undefined;
    connectOrCreate?: Product_attribute_setCreateOrConnectWithoutProduct_attributeInput[] | undefined;
    upsert?: Product_attribute_setUpsertWithWhereUniqueWithoutProduct_attributeInput[] | undefined;
    createMany?: Product_attribute_setCreateManyProduct_attributeInputEnvelope | undefined;
    set?: Product_attribute_setWhereUniqueInput[] | undefined;
    disconnect?: Product_attribute_setWhereUniqueInput[] | undefined;
    delete?: Product_attribute_setWhereUniqueInput[] | undefined;
    connect?: Product_attribute_setWhereUniqueInput[] | undefined;
    update?: Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput[] | undefined;
    updateMany?: Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput[] | undefined;
    deleteMany?: Product_attribute_setScalarWhereInput[] | undefined;
}
