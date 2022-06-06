import { CommentsCreateManyCustomersInputEnvelope } from "../inputs/CommentsCreateManyCustomersInputEnvelope";
import { CommentsCreateOrConnectWithoutCustomersInput } from "../inputs/CommentsCreateOrConnectWithoutCustomersInput";
import { CommentsCreateWithoutCustomersInput } from "../inputs/CommentsCreateWithoutCustomersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";
export declare class CommentsCreateNestedManyWithoutCustomersInput {
    create?: CommentsCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: CommentsCreateOrConnectWithoutCustomersInput[] | undefined;
    createMany?: CommentsCreateManyCustomersInputEnvelope | undefined;
    connect?: CommentsWhereUniqueInput[] | undefined;
}
