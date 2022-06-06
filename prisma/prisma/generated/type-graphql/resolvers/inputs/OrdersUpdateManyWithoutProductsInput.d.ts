import { OrdersCreateManyProductsInputEnvelope } from "../inputs/OrdersCreateManyProductsInputEnvelope";
import { OrdersCreateOrConnectWithoutProductsInput } from "../inputs/OrdersCreateOrConnectWithoutProductsInput";
import { OrdersCreateWithoutProductsInput } from "../inputs/OrdersCreateWithoutProductsInput";
import { OrdersScalarWhereInput } from "../inputs/OrdersScalarWhereInput";
import { OrdersUpdateManyWithWhereWithoutProductsInput } from "../inputs/OrdersUpdateManyWithWhereWithoutProductsInput";
import { OrdersUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/OrdersUpdateWithWhereUniqueWithoutProductsInput";
import { OrdersUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/OrdersUpsertWithWhereUniqueWithoutProductsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersUpdateManyWithoutProductsInput {
    create?: OrdersCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: OrdersUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    createMany?: OrdersCreateManyProductsInputEnvelope | undefined;
    set?: OrdersWhereUniqueInput[] | undefined;
    disconnect?: OrdersWhereUniqueInput[] | undefined;
    delete?: OrdersWhereUniqueInput[] | undefined;
    connect?: OrdersWhereUniqueInput[] | undefined;
    update?: OrdersUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: OrdersUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: OrdersScalarWhereInput[] | undefined;
}
