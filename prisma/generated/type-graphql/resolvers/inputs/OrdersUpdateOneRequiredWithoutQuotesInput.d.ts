import { OrdersCreateOrConnectWithoutQuotesInput } from "../inputs/OrdersCreateOrConnectWithoutQuotesInput";
import { OrdersCreateWithoutQuotesInput } from "../inputs/OrdersCreateWithoutQuotesInput";
import { OrdersUpdateWithoutQuotesInput } from "../inputs/OrdersUpdateWithoutQuotesInput";
import { OrdersUpsertWithoutQuotesInput } from "../inputs/OrdersUpsertWithoutQuotesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersUpdateOneRequiredWithoutQuotesInput {
    create?: OrdersCreateWithoutQuotesInput | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutQuotesInput | undefined;
    upsert?: OrdersUpsertWithoutQuotesInput | undefined;
    connect?: OrdersWhereUniqueInput | undefined;
    update?: OrdersUpdateWithoutQuotesInput | undefined;
}
