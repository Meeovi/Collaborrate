import { TransactionsCreateManyCustomer_paymentInputEnvelope } from "../inputs/TransactionsCreateManyCustomer_paymentInputEnvelope";
import { TransactionsCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateOrConnectWithoutCustomer_paymentInput";
import { TransactionsCreateWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateWithoutCustomer_paymentInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";
export declare class TransactionsCreateNestedManyWithoutCustomer_paymentInput {
    create?: TransactionsCreateWithoutCustomer_paymentInput[] | undefined;
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomer_paymentInput[] | undefined;
    createMany?: TransactionsCreateManyCustomer_paymentInputEnvelope | undefined;
    connect?: TransactionsWhereUniqueInput[] | undefined;
}
