import { TransactionsCreateManyOrdersInputEnvelope } from "../inputs/TransactionsCreateManyOrdersInputEnvelope";
import { TransactionsCreateOrConnectWithoutOrdersInput } from "../inputs/TransactionsCreateOrConnectWithoutOrdersInput";
import { TransactionsCreateWithoutOrdersInput } from "../inputs/TransactionsCreateWithoutOrdersInput";
import { TransactionsScalarWhereInput } from "../inputs/TransactionsScalarWhereInput";
import { TransactionsUpdateManyWithWhereWithoutOrdersInput } from "../inputs/TransactionsUpdateManyWithWhereWithoutOrdersInput";
import { TransactionsUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/TransactionsUpdateWithWhereUniqueWithoutOrdersInput";
import { TransactionsUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/TransactionsUpsertWithWhereUniqueWithoutOrdersInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";
export declare class TransactionsUpdateManyWithoutOrdersInput {
    create?: TransactionsCreateWithoutOrdersInput[] | undefined;
    connectOrCreate?: TransactionsCreateOrConnectWithoutOrdersInput[] | undefined;
    upsert?: TransactionsUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;
    createMany?: TransactionsCreateManyOrdersInputEnvelope | undefined;
    set?: TransactionsWhereUniqueInput[] | undefined;
    disconnect?: TransactionsWhereUniqueInput[] | undefined;
    delete?: TransactionsWhereUniqueInput[] | undefined;
    connect?: TransactionsWhereUniqueInput[] | undefined;
    update?: TransactionsUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;
    updateMany?: TransactionsUpdateManyWithWhereWithoutOrdersInput[] | undefined;
    deleteMany?: TransactionsScalarWhereInput[] | undefined;
}
