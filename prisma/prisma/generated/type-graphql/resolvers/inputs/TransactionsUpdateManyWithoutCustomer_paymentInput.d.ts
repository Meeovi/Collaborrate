import { TransactionsCreateManyCustomer_paymentInputEnvelope } from "../inputs/TransactionsCreateManyCustomer_paymentInputEnvelope";
import { TransactionsCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateOrConnectWithoutCustomer_paymentInput";
import { TransactionsCreateWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateWithoutCustomer_paymentInput";
import { TransactionsScalarWhereInput } from "../inputs/TransactionsScalarWhereInput";
import { TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput";
import { TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput";
import { TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput } from "../inputs/TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";
export declare class TransactionsUpdateManyWithoutCustomer_paymentInput {
    create?: TransactionsCreateWithoutCustomer_paymentInput[] | undefined;
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomer_paymentInput[] | undefined;
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput[] | undefined;
    createMany?: TransactionsCreateManyCustomer_paymentInputEnvelope | undefined;
    set?: TransactionsWhereUniqueInput[] | undefined;
    disconnect?: TransactionsWhereUniqueInput[] | undefined;
    delete?: TransactionsWhereUniqueInput[] | undefined;
    connect?: TransactionsWhereUniqueInput[] | undefined;
    update?: TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput[] | undefined;
    updateMany?: TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput[] | undefined;
    deleteMany?: TransactionsScalarWhereInput[] | undefined;
}
