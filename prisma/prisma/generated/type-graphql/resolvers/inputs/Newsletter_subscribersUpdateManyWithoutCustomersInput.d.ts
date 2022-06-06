import { Newsletter_subscribersCreateManyCustomersInputEnvelope } from "../inputs/Newsletter_subscribersCreateManyCustomersInputEnvelope";
import { Newsletter_subscribersCreateOrConnectWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateOrConnectWithoutCustomersInput";
import { Newsletter_subscribersCreateWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateWithoutCustomersInput";
import { Newsletter_subscribersScalarWhereInput } from "../inputs/Newsletter_subscribersScalarWhereInput";
import { Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput";
import { Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput";
import { Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput";
import { Newsletter_subscribersWhereUniqueInput } from "../inputs/Newsletter_subscribersWhereUniqueInput";
export declare class Newsletter_subscribersUpdateManyWithoutCustomersInput {
    create?: Newsletter_subscribersCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: Newsletter_subscribersCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    createMany?: Newsletter_subscribersCreateManyCustomersInputEnvelope | undefined;
    set?: Newsletter_subscribersWhereUniqueInput[] | undefined;
    disconnect?: Newsletter_subscribersWhereUniqueInput[] | undefined;
    delete?: Newsletter_subscribersWhereUniqueInput[] | undefined;
    connect?: Newsletter_subscribersWhereUniqueInput[] | undefined;
    update?: Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: Newsletter_subscribersScalarWhereInput[] | undefined;
}
