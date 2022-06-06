import { Credit_memosCreateManyProductsInputEnvelope } from "../inputs/Credit_memosCreateManyProductsInputEnvelope";
import { Credit_memosCreateOrConnectWithoutProductsInput } from "../inputs/Credit_memosCreateOrConnectWithoutProductsInput";
import { Credit_memosCreateWithoutProductsInput } from "../inputs/Credit_memosCreateWithoutProductsInput";
import { Credit_memosScalarWhereInput } from "../inputs/Credit_memosScalarWhereInput";
import { Credit_memosUpdateManyWithWhereWithoutProductsInput } from "../inputs/Credit_memosUpdateManyWithWhereWithoutProductsInput";
import { Credit_memosUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Credit_memosUpdateWithWhereUniqueWithoutProductsInput";
import { Credit_memosUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Credit_memosUpsertWithWhereUniqueWithoutProductsInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";
export declare class Credit_memosUpdateManyWithoutProductsInput {
    create?: Credit_memosCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Credit_memosCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: Credit_memosUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    createMany?: Credit_memosCreateManyProductsInputEnvelope | undefined;
    set?: Credit_memosWhereUniqueInput[] | undefined;
    disconnect?: Credit_memosWhereUniqueInput[] | undefined;
    delete?: Credit_memosWhereUniqueInput[] | undefined;
    connect?: Credit_memosWhereUniqueInput[] | undefined;
    update?: Credit_memosUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: Credit_memosUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: Credit_memosScalarWhereInput[] | undefined;
}
