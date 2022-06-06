import { Credit_memosCreateManyCustomersInputEnvelope } from "../inputs/Credit_memosCreateManyCustomersInputEnvelope";
import { Credit_memosCreateOrConnectWithoutCustomersInput } from "../inputs/Credit_memosCreateOrConnectWithoutCustomersInput";
import { Credit_memosCreateWithoutCustomersInput } from "../inputs/Credit_memosCreateWithoutCustomersInput";
import { Credit_memosScalarWhereInput } from "../inputs/Credit_memosScalarWhereInput";
import { Credit_memosUpdateManyWithWhereWithoutCustomersInput } from "../inputs/Credit_memosUpdateManyWithWhereWithoutCustomersInput";
import { Credit_memosUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/Credit_memosUpdateWithWhereUniqueWithoutCustomersInput";
import { Credit_memosUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/Credit_memosUpsertWithWhereUniqueWithoutCustomersInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";
export declare class Credit_memosUpdateManyWithoutCustomersInput {
    create?: Credit_memosCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: Credit_memosCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: Credit_memosUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    createMany?: Credit_memosCreateManyCustomersInputEnvelope | undefined;
    set?: Credit_memosWhereUniqueInput[] | undefined;
    disconnect?: Credit_memosWhereUniqueInput[] | undefined;
    delete?: Credit_memosWhereUniqueInput[] | undefined;
    connect?: Credit_memosWhereUniqueInput[] | undefined;
    update?: Credit_memosUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: Credit_memosUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: Credit_memosScalarWhereInput[] | undefined;
}
