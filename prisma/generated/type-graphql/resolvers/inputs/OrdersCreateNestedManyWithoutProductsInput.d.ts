import { OrdersCreateManyProductsInputEnvelope } from "../inputs/OrdersCreateManyProductsInputEnvelope";
import { OrdersCreateOrConnectWithoutProductsInput } from "../inputs/OrdersCreateOrConnectWithoutProductsInput";
import { OrdersCreateWithoutProductsInput } from "../inputs/OrdersCreateWithoutProductsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersCreateNestedManyWithoutProductsInput {
    create?: OrdersCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutProductsInput[] | undefined;
    createMany?: OrdersCreateManyProductsInputEnvelope | undefined;
    connect?: OrdersWhereUniqueInput[] | undefined;
}
