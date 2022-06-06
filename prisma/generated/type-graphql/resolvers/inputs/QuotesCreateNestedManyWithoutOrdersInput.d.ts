import { QuotesCreateManyOrdersInputEnvelope } from "../inputs/QuotesCreateManyOrdersInputEnvelope";
import { QuotesCreateOrConnectWithoutOrdersInput } from "../inputs/QuotesCreateOrConnectWithoutOrdersInput";
import { QuotesCreateWithoutOrdersInput } from "../inputs/QuotesCreateWithoutOrdersInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";
export declare class QuotesCreateNestedManyWithoutOrdersInput {
    create?: QuotesCreateWithoutOrdersInput[] | undefined;
    connectOrCreate?: QuotesCreateOrConnectWithoutOrdersInput[] | undefined;
    createMany?: QuotesCreateManyOrdersInputEnvelope | undefined;
    connect?: QuotesWhereUniqueInput[] | undefined;
}
