import { Customer_groupCreateManyCustomersInputEnvelope } from "../inputs/Customer_groupCreateManyCustomersInputEnvelope";
import { Customer_groupCreateOrConnectWithoutCustomersInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomersInput";
import { Customer_groupCreateWithoutCustomersInput } from "../inputs/Customer_groupCreateWithoutCustomersInput";
import { Customer_groupScalarWhereInput } from "../inputs/Customer_groupScalarWhereInput";
import { Customer_groupUpdateManyWithWhereWithoutCustomersInput } from "../inputs/Customer_groupUpdateManyWithWhereWithoutCustomersInput";
import { Customer_groupUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/Customer_groupUpdateWithWhereUniqueWithoutCustomersInput";
import { Customer_groupUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/Customer_groupUpsertWithWhereUniqueWithoutCustomersInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";
export declare class Customer_groupUpdateManyWithoutCustomersInput {
    create?: Customer_groupCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: Customer_groupUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    createMany?: Customer_groupCreateManyCustomersInputEnvelope | undefined;
    set?: Customer_groupWhereUniqueInput[] | undefined;
    disconnect?: Customer_groupWhereUniqueInput[] | undefined;
    delete?: Customer_groupWhereUniqueInput[] | undefined;
    connect?: Customer_groupWhereUniqueInput[] | undefined;
    update?: Customer_groupUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: Customer_groupUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: Customer_groupScalarWhereInput[] | undefined;
}
