import { Product_attributeCreateManyProductsInputEnvelope } from "../inputs/Product_attributeCreateManyProductsInputEnvelope";
import { Product_attributeCreateOrConnectWithoutProductsInput } from "../inputs/Product_attributeCreateOrConnectWithoutProductsInput";
import { Product_attributeCreateWithoutProductsInput } from "../inputs/Product_attributeCreateWithoutProductsInput";
import { Product_attributeScalarWhereInput } from "../inputs/Product_attributeScalarWhereInput";
import { Product_attributeUpdateManyWithWhereWithoutProductsInput } from "../inputs/Product_attributeUpdateManyWithWhereWithoutProductsInput";
import { Product_attributeUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Product_attributeUpdateWithWhereUniqueWithoutProductsInput";
import { Product_attributeUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Product_attributeUpsertWithWhereUniqueWithoutProductsInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";
export declare class Product_attributeUpdateManyWithoutProductsInput {
    create?: Product_attributeCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Product_attributeCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: Product_attributeUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    createMany?: Product_attributeCreateManyProductsInputEnvelope | undefined;
    set?: Product_attributeWhereUniqueInput[] | undefined;
    disconnect?: Product_attributeWhereUniqueInput[] | undefined;
    delete?: Product_attributeWhereUniqueInput[] | undefined;
    connect?: Product_attributeWhereUniqueInput[] | undefined;
    update?: Product_attributeUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: Product_attributeUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: Product_attributeScalarWhereInput[] | undefined;
}
