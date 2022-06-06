import { Tax_ruleCreateManyProductsInputEnvelope } from "../inputs/Tax_ruleCreateManyProductsInputEnvelope";
import { Tax_ruleCreateOrConnectWithoutProductsInput } from "../inputs/Tax_ruleCreateOrConnectWithoutProductsInput";
import { Tax_ruleCreateWithoutProductsInput } from "../inputs/Tax_ruleCreateWithoutProductsInput";
import { Tax_ruleWhereUniqueInput } from "../inputs/Tax_ruleWhereUniqueInput";
export declare class Tax_ruleCreateNestedManyWithoutProductsInput {
    create?: Tax_ruleCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Tax_ruleCreateOrConnectWithoutProductsInput[] | undefined;
    createMany?: Tax_ruleCreateManyProductsInputEnvelope | undefined;
    connect?: Tax_ruleWhereUniqueInput[] | undefined;
}
