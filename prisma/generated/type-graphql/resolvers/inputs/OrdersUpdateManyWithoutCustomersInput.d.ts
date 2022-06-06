import { OrdersCreateManyCustomersInputEnvelope } from "../inputs/OrdersCreateManyCustomersInputEnvelope";
import { OrdersCreateOrConnectWithoutCustomersInput } from "../inputs/OrdersCreateOrConnectWithoutCustomersInput";
import { OrdersCreateWithoutCustomersInput } from "../inputs/OrdersCreateWithoutCustomersInput";
import { OrdersScalarWhereInput } from "../inputs/OrdersScalarWhereInput";
import { OrdersUpdateManyWithWhereWithoutCustomersInput } from "../inputs/OrdersUpdateManyWithWhereWithoutCustomersInput";
import { OrdersUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/OrdersUpdateWithWhereUniqueWithoutCustomersInput";
import { OrdersUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/OrdersUpsertWithWhereUniqueWithoutCustomersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersUpdateManyWithoutCustomersInput {
    create?: OrdersCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: OrdersUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    createMany?: OrdersCreateManyCustomersInputEnvelope | undefined;
    set?: OrdersWhereUniqueInput[] | undefined;
    disconnect?: OrdersWhereUniqueInput[] | undefined;
    delete?: OrdersWhereUniqueInput[] | undefined;
    connect?: OrdersWhereUniqueInput[] | undefined;
    update?: OrdersUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: OrdersUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: OrdersScalarWhereInput[] | undefined;
}
