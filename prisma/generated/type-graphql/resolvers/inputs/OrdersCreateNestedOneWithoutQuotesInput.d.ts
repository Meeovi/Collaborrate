import { OrdersCreateOrConnectWithoutQuotesInput } from "../inputs/OrdersCreateOrConnectWithoutQuotesInput";
import { OrdersCreateWithoutQuotesInput } from "../inputs/OrdersCreateWithoutQuotesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";
export declare class OrdersCreateNestedOneWithoutQuotesInput {
    create?: OrdersCreateWithoutQuotesInput | undefined;
    connectOrCreate?: OrdersCreateOrConnectWithoutQuotesInput | undefined;
    connect?: OrdersWhereUniqueInput | undefined;
}
