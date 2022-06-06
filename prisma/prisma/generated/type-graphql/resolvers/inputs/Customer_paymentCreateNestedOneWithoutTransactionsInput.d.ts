import { Customer_paymentCreateOrConnectWithoutTransactionsInput } from "../inputs/Customer_paymentCreateOrConnectWithoutTransactionsInput";
import { Customer_paymentCreateWithoutTransactionsInput } from "../inputs/Customer_paymentCreateWithoutTransactionsInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";
export declare class Customer_paymentCreateNestedOneWithoutTransactionsInput {
    create?: Customer_paymentCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: Customer_paymentCreateOrConnectWithoutTransactionsInput | undefined;
    connect?: Customer_paymentWhereUniqueInput | undefined;
}
