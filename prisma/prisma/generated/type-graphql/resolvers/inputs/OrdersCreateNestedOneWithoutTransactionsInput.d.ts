import { OrdersCreateOrConnectWithoutTransactionsInput } from "../inputs/OrdersCreateOrConnectWithoutTransactionsInput";
import { OrdersCreateWithoutTransactionsInput } from "../inputs/OrdersCreateWithoutTransactionsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersCreateNestedOneWithoutTransactionsInput {
    create?: OrdersCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutTransactionsInput | undefined;
    connect?: OrdersWhereUniqueInput | undefined;
}
