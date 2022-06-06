import { Tax_rateCreateManyProductsInputEnvelope } from "../inputs/Tax_rateCreateManyProductsInputEnvelope";
import { Tax_rateCreateOrConnectWithoutProductsInput } from "../inputs/Tax_rateCreateOrConnectWithoutProductsInput";
import { Tax_rateCreateWithoutProductsInput } from "../inputs/Tax_rateCreateWithoutProductsInput";
import { Tax_rateScalarWhereInput } from "../inputs/Tax_rateScalarWhereInput";
import { Tax_rateUpdateManyWithWhereWithoutProductsInput } from "../inputs/Tax_rateUpdateManyWithWhereWithoutProductsInput";
import { Tax_rateUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_rateUpdateWithWhereUniqueWithoutProductsInput";
import { Tax_rateUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_rateUpsertWithWhereUniqueWithoutProductsInput";
import { Tax_rateWhereUniqueInput } from "../inputs/Tax_rateWhereUniqueInput";
export declare class Tax_rateUpdateManyWithoutProductsInput {
    create?: Tax_rateCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Tax_rateCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: Tax_rateUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    createMany?: Tax_rateCreateManyProductsInputEnvelope | undefined;
    set?: Tax_rateWhereUniqueInput[] | undefined;
    disconnect?: Tax_rateWhereUniqueInput[] | undefined;
    delete?: Tax_rateWhereUniqueInput[] | undefined;
    connect?: Tax_rateWhereUniqueInput[] | undefined;
    update?: Tax_rateUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: Tax_rateUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: Tax_rateScalarWhereInput[] | undefined;
}
