import { Tax_ruleCreateManyProductsInputEnvelope } from "../inputs/Tax_ruleCreateManyProductsInputEnvelope";
import { Tax_ruleCreateOrConnectWithoutProductsInput } from "../inputs/Tax_ruleCreateOrConnectWithoutProductsInput";
import { Tax_ruleCreateWithoutProductsInput } from "../inputs/Tax_ruleCreateWithoutProductsInput";
import { Tax_ruleScalarWhereInput } from "../inputs/Tax_ruleScalarWhereInput";
import { Tax_ruleUpdateManyWithWhereWithoutProductsInput } from "../inputs/Tax_ruleUpdateManyWithWhereWithoutProductsInput";
import { Tax_ruleUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_ruleUpdateWithWhereUniqueWithoutProductsInput";
import { Tax_ruleUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_ruleUpsertWithWhereUniqueWithoutProductsInput";
import { Tax_ruleWhereUniqueInput } from "../inputs/Tax_ruleWhereUniqueInput";
export declare class Tax_ruleUpdateManyWithoutProductsInput {
    create?: Tax_ruleCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Tax_ruleCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: Tax_ruleUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    createMany?: Tax_ruleCreateManyProductsInputEnvelope | undefined;
    set?: Tax_ruleWhereUniqueInput[] | undefined;
    disconnect?: Tax_ruleWhereUniqueInput[] | undefined;
    delete?: Tax_ruleWhereUniqueInput[] | undefined;
    connect?: Tax_ruleWhereUniqueInput[] | undefined;
    update?: Tax_ruleUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: Tax_ruleUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: Tax_ruleScalarWhereInput[] | undefined;
}
