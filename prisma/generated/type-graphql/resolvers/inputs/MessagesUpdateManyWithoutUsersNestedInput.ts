import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateManyUsersInputEnvelope } from "../inputs/MessagesCreateManyUsersInputEnvelope";
import { MessagesCreateOrConnectWithoutUsersInput } from "../inputs/MessagesCreateOrConnectWithoutUsersInput";
import { MessagesCreateWithoutUsersInput } from "../inputs/MessagesCreateWithoutUsersInput";
import { MessagesScalarWhereInput } from "../inputs/MessagesScalarWhereInput";
import { MessagesUpdateManyWithWhereWithoutUsersInput } from "../inputs/MessagesUpdateManyWithWhereWithoutUsersInput";
import { MessagesUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/MessagesUpdateWithWhereUniqueWithoutUsersInput";
import { MessagesUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/MessagesUpsertWithWhereUniqueWithoutUsersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class MessagesUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [MessagesCreateWithoutUsersInput], {
    nullable: true
  })
  create?: MessagesCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: MessagesCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: MessagesUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => MessagesCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: MessagesCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereUniqueInput], {
    nullable: true
  })
  set?: MessagesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessagesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereUniqueInput], {
    nullable: true
  })
  delete?: MessagesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereUniqueInput], {
    nullable: true
  })
  connect?: MessagesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: MessagesUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: MessagesUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessagesScalarWhereInput[] | undefined;
}
