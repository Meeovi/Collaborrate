import { ReturnsCreateManyProductsInputEnvelope } from "../inputs/ReturnsCreateManyProductsInputEnvelope";
import { ReturnsCreateOrConnectWithoutProductsInput } from "../inputs/ReturnsCreateOrConnectWithoutProductsInput";
import { ReturnsCreateWithoutProductsInput } from "../inputs/ReturnsCreateWithoutProductsInput";
import { ReturnsScalarWhereInput } from "../inputs/ReturnsScalarWhereInput";
import { ReturnsUpdateManyWithWhereWithoutProductsInput } from "../inputs/ReturnsUpdateManyWithWhereWithoutProductsInput";
import { ReturnsUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/ReturnsUpdateWithWhereUniqueWithoutProductsInput";
import { ReturnsUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/ReturnsUpsertWithWhereUniqueWithoutProductsInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";
export declare class ReturnsUpdateManyWithoutProductsInput {
    create?: ReturnsCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: ReturnsCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: ReturnsUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    createMany?: ReturnsCreateManyProductsInputEnvelope | undefined;
    set?: ReturnsWhereUniqueInput[] | undefined;
    disconnect?: ReturnsWhereUniqueInput[] | undefined;
    delete?: ReturnsWhereUniqueInput[] | undefined;
    connect?: ReturnsWhereUniqueInput[] | undefined;
    update?: ReturnsUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: ReturnsUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: ReturnsScalarWhereInput[] | undefined;
}
