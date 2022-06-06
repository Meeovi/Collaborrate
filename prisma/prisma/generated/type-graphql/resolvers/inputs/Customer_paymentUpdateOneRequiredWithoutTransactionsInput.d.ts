import { Customer_paymentCreateOrConnectWithoutTransactionsInput } from "../inputs/Customer_paymentCreateOrConnectWithoutTransactionsInput";
import { Customer_paymentCreateWithoutTransactionsInput } from "../inputs/Customer_paymentCreateWithoutTransactionsInput";
import { Customer_paymentUpdateWithoutTransactionsInput } from "../inputs/Customer_paymentUpdateWithoutTransactionsInput";
import { Customer_paymentUpsertWithoutTransactionsInput } from "../inputs/Customer_paymentUpsertWithoutTransactionsInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";
export declare class Customer_paymentUpdateOneRequiredWithoutTransactionsInput {
    create?: Customer_paymentCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: Customer_paymentCreateOrConnectWithoutTransactionsInput | undefined;
    upsert?: Customer_paymentUpsertWithoutTransactionsInput | undefined;
    connect?: Customer_paymentWhereUniqueInput | undefined;
    update?: Customer_paymentUpdateWithoutTransactionsInput | undefined;
}
