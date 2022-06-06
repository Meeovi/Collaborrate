import { EmailsCreateManyCustomersInputEnvelope } from "../inputs/EmailsCreateManyCustomersInputEnvelope";
import { EmailsCreateOrConnectWithoutCustomersInput } from "../inputs/EmailsCreateOrConnectWithoutCustomersInput";
import { EmailsCreateWithoutCustomersInput } from "../inputs/EmailsCreateWithoutCustomersInput";
import { EmailsScalarWhereInput } from "../inputs/EmailsScalarWhereInput";
import { EmailsUpdateManyWithWhereWithoutCustomersInput } from "../inputs/EmailsUpdateManyWithWhereWithoutCustomersInput";
import { EmailsUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/EmailsUpdateWithWhereUniqueWithoutCustomersInput";
import { EmailsUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/EmailsUpsertWithWhereUniqueWithoutCustomersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";
export declare class EmailsUpdateManyWithoutCustomersInput {
    create?: EmailsCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: EmailsCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: EmailsUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    createMany?: EmailsCreateManyCustomersInputEnvelope | undefined;
    set?: EmailsWhereUniqueInput[] | undefined;
    disconnect?: EmailsWhereUniqueInput[] | undefined;
    delete?: EmailsWhereUniqueInput[] | undefined;
    connect?: EmailsWhereUniqueInput[] | undefined;
    update?: EmailsUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: EmailsUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: EmailsScalarWhereInput[] | undefined;
}
