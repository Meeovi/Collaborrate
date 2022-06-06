import { QuotesCreateManyOrdersInputEnvelope } from "../inputs/QuotesCreateManyOrdersInputEnvelope";
import { QuotesCreateOrConnectWithoutOrdersInput } from "../inputs/QuotesCreateOrConnectWithoutOrdersInput";
import { QuotesCreateWithoutOrdersInput } from "../inputs/QuotesCreateWithoutOrdersInput";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyWithWhereWithoutOrdersInput } from "../inputs/QuotesUpdateManyWithWhereWithoutOrdersInput";
import { QuotesUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/QuotesUpdateWithWhereUniqueWithoutOrdersInput";
import { QuotesUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/QuotesUpsertWithWhereUniqueWithoutOrdersInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";
export declare class QuotesUpdateManyWithoutOrdersInput {
    create?: QuotesCreateWithoutOrdersInput[] | undefined;
    connectOrCreate?: QuotesCreateOrConnectWithoutOrdersInput[] | undefined;
    upsert?: QuotesUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;
    createMany?: QuotesCreateManyOrdersInputEnvelope | undefined;
    set?: QuotesWhereUniqueInput[] | undefined;
    disconnect?: QuotesWhereUniqueInput[] | undefined;
    delete?: QuotesWhereUniqueInput[] | undefined;
    connect?: QuotesWhereUniqueInput[] | undefined;
    update?: QuotesUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;
    updateMany?: QuotesUpdateManyWithWhereWithoutOrdersInput[] | undefined;
    deleteMany?: QuotesScalarWhereInput[] | undefined;
}
