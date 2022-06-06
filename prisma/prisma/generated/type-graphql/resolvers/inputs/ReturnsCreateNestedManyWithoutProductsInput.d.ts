import { ReturnsCreateManyProductsInputEnvelope } from "../inputs/ReturnsCreateManyProductsInputEnvelope";
import { ReturnsCreateOrConnectWithoutProductsInput } from "../inputs/ReturnsCreateOrConnectWithoutProductsInput";
import { ReturnsCreateWithoutProductsInput } from "../inputs/ReturnsCreateWithoutProductsInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";
export declare class ReturnsCreateNestedManyWithoutProductsInput {
    create?: ReturnsCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: ReturnsCreateOrConnectWithoutProductsInput[] | undefined;
    createMany?: ReturnsCreateManyProductsInputEnvelope | undefined;
    connect?: ReturnsWhereUniqueInput[] | undefined;
}
