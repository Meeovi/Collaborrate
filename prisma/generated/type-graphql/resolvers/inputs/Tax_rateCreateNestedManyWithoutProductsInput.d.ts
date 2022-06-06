import { Tax_rateCreateManyProductsInputEnvelope } from "../inputs/Tax_rateCreateManyProductsInputEnvelope";
import { Tax_rateCreateOrConnectWithoutProductsInput } from "../inputs/Tax_rateCreateOrConnectWithoutProductsInput";
import { Tax_rateCreateWithoutProductsInput } from "../inputs/Tax_rateCreateWithoutProductsInput";
import { Tax_rateWhereUniqueInput } from "../inputs/Tax_rateWhereUniqueInput";
export declare class Tax_rateCreateNestedManyWithoutProductsInput {
    create?: Tax_rateCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Tax_rateCreateOrConnectWithoutProductsInput[] | undefined;
    createMany?: Tax_rateCreateManyProductsInputEnvelope | undefined;
    connect?: Tax_rateWhereUniqueInput[] | undefined;
}
