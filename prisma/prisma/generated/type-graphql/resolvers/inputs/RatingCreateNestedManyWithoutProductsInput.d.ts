import { RatingCreateManyProductsInputEnvelope } from "../inputs/RatingCreateManyProductsInputEnvelope";
import { RatingCreateOrConnectWithoutProductsInput } from "../inputs/RatingCreateOrConnectWithoutProductsInput";
import { RatingCreateWithoutProductsInput } from "../inputs/RatingCreateWithoutProductsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";
export declare class RatingCreateNestedManyWithoutProductsInput {
    create?: RatingCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: RatingCreateOrConnectWithoutProductsInput[] | undefined;
    createMany?: RatingCreateManyProductsInputEnvelope | undefined;
    connect?: RatingWhereUniqueInput[] | undefined;
}
