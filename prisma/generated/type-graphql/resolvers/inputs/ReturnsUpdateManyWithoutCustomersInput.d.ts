import { ReturnsCreateManyCustomersInputEnvelope } from "../inputs/ReturnsCreateManyCustomersInputEnvelope";
import { ReturnsCreateOrConnectWithoutCustomersInput } from "../inputs/ReturnsCreateOrConnectWithoutCustomersInput";
import { ReturnsCreateWithoutCustomersInput } from "../inputs/ReturnsCreateWithoutCustomersInput";
import { ReturnsScalarWhereInput } from "../inputs/ReturnsScalarWhereInput";
import { ReturnsUpdateManyWithWhereWithoutCustomersInput } from "../inputs/ReturnsUpdateManyWithWhereWithoutCustomersInput";
import { ReturnsUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/ReturnsUpdateWithWhereUniqueWithoutCustomersInput";
import { ReturnsUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/ReturnsUpsertWithWhereUniqueWithoutCustomersInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";
export declare class ReturnsUpdateManyWithoutCustomersInput {
    create?: ReturnsCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: ReturnsCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: ReturnsUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    createMany?: ReturnsCreateManyCustomersInputEnvelope | undefined;
    set?: ReturnsWhereUniqueInput[] | undefined;
    disconnect?: ReturnsWhereUniqueInput[] | undefined;
    delete?: ReturnsWhereUniqueInput[] | undefined;
    connect?: ReturnsWhereUniqueInput[] | undefined;
    update?: ReturnsUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: ReturnsUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: ReturnsScalarWhereInput[] | undefined;
}
