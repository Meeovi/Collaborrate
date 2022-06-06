import { CommentsCreateManyCustomersInputEnvelope } from "../inputs/CommentsCreateManyCustomersInputEnvelope";
import { CommentsCreateOrConnectWithoutCustomersInput } from "../inputs/CommentsCreateOrConnectWithoutCustomersInput";
import { CommentsCreateWithoutCustomersInput } from "../inputs/CommentsCreateWithoutCustomersInput";
import { CommentsScalarWhereInput } from "../inputs/CommentsScalarWhereInput";
import { CommentsUpdateManyWithWhereWithoutCustomersInput } from "../inputs/CommentsUpdateManyWithWhereWithoutCustomersInput";
import { CommentsUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/CommentsUpdateWithWhereUniqueWithoutCustomersInput";
import { CommentsUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/CommentsUpsertWithWhereUniqueWithoutCustomersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";
export declare class CommentsUpdateManyWithoutCustomersInput {
    create?: CommentsCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: CommentsCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: CommentsUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    createMany?: CommentsCreateManyCustomersInputEnvelope | undefined;
    set?: CommentsWhereUniqueInput[] | undefined;
    disconnect?: CommentsWhereUniqueInput[] | undefined;
    delete?: CommentsWhereUniqueInput[] | undefined;
    connect?: CommentsWhereUniqueInput[] | undefined;
    update?: CommentsUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: CommentsUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: CommentsScalarWhereInput[] | undefined;
}
