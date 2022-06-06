import { OrdersCreateManyCustomersInputEnvelope } from "../inputs/OrdersCreateManyCustomersInputEnvelope";
import { OrdersCreateOrConnectWithoutCustomersInput } from "../inputs/OrdersCreateOrConnectWithoutCustomersInput";
import { OrdersCreateWithoutCustomersInput } from "../inputs/OrdersCreateWithoutCustomersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersCreateNestedManyWithoutCustomersInput {
    create?: OrdersCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomersInput[] | undefined;
    createMany?: OrdersCreateManyCustomersInputEnvelope | undefined;
    connect?: OrdersWhereUniqueInput[] | undefined;
}
