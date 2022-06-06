import { OrdersCreateOrConnectWithoutTransactionsInput } from "../inputs/OrdersCreateOrConnectWithoutTransactionsInput";
import { OrdersCreateWithoutTransactionsInput } from "../inputs/OrdersCreateWithoutTransactionsInput";
import { OrdersUpdateWithoutTransactionsInput } from "../inputs/OrdersUpdateWithoutTransactionsInput";
import { OrdersUpsertWithoutTransactionsInput } from "../inputs/OrdersUpsertWithoutTransactionsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersUpdateOneRequiredWithoutTransactionsInput {
    create?: OrdersCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutTransactionsInput | undefined;
    upsert?: OrdersUpsertWithoutTransactionsInput | undefined;
    connect?: OrdersWhereUniqueInput | undefined;
    update?: OrdersUpdateWithoutTransactionsInput | undefined;
}
