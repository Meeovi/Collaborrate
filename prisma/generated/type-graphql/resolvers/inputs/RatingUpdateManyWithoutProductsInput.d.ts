import { RatingCreateManyProductsInputEnvelope } from "../inputs/RatingCreateManyProductsInputEnvelope";
import { RatingCreateOrConnectWithoutProductsInput } from "../inputs/RatingCreateOrConnectWithoutProductsInput";
import { RatingCreateWithoutProductsInput } from "../inputs/RatingCreateWithoutProductsInput";
import { RatingScalarWhereInput } from "../inputs/RatingScalarWhereInput";
import { RatingUpdateManyWithWhereWithoutProductsInput } from "../inputs/RatingUpdateManyWithWhereWithoutProductsInput";
import { RatingUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/RatingUpdateWithWhereUniqueWithoutProductsInput";
import { RatingUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/RatingUpsertWithWhereUniqueWithoutProductsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";
export declare class RatingUpdateManyWithoutProductsInput {
    create?: RatingCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: RatingCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: RatingUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    createMany?: RatingCreateManyProductsInputEnvelope | undefined;
    set?: RatingWhereUniqueInput[] | undefined;
    disconnect?: RatingWhereUniqueInput[] | undefined;
    delete?: RatingWhereUniqueInput[] | undefined;
    connect?: RatingWhereUniqueInput[] | undefined;
    update?: RatingUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: RatingUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: RatingScalarWhereInput[] | undefined;
}
