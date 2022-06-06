import { TransactionsCreateManyOrdersInputEnvelope } from "../inputs/TransactionsCreateManyOrdersInputEnvelope";
import { TransactionsCreateOrConnectWithoutOrdersInput } from "../inputs/TransactionsCreateOrConnectWithoutOrdersInput";
import { TransactionsCreateWithoutOrdersInput } from "../inputs/TransactionsCreateWithoutOrdersInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";
export declare class TransactionsCreateNestedManyWithoutOrdersInput {
    create?: TransactionsCreateWithoutOrdersInput[] | undefined;
    connectOrCreate?: TransactionsCreateOrConnectWithoutOrdersInput[] | undefined;
    createMany?: TransactionsCreateManyOrdersInputEnvelope | undefined;
    connect?: TransactionsWhereUniqueInput[] | undefined;
}
