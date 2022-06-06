import { ReturnsCreateManyCustomersInputEnvelope } from "../inputs/ReturnsCreateManyCustomersInputEnvelope";
import { ReturnsCreateOrConnectWithoutCustomersInput } from "../inputs/ReturnsCreateOrConnectWithoutCustomersInput";
import { ReturnsCreateWithoutCustomersInput } from "../inputs/ReturnsCreateWithoutCustomersInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";
export declare class ReturnsCreateNestedManyWithoutCustomersInput {
    create?: ReturnsCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: ReturnsCreateOrConnectWithoutCustomersInput[] | undefined;
    createMany?: ReturnsCreateManyCustomersInputEnvelope | undefined;
    connect?: ReturnsWhereUniqueInput[] | undefined;
}
