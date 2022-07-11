import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateManyCustomersInputEnvelope } from "../inputs/MessagesCreateManyCustomersInputEnvelope";
import { MessagesCreateOrConnectWithoutCustomersInput } from "../inputs/MessagesCreateOrConnectWithoutCustomersInput";
import { MessagesCreateWithoutCustomersInput } from "../inputs/MessagesCreateWithoutCustomersInput";
import { MessagesScalarWhereInput } from "../inputs/MessagesScalarWhereInput";
import { MessagesUpdateManyWithWhereWithoutCustomersInput } from "../inputs/MessagesUpdateManyWithWhereWithoutCustomersInput";
import { MessagesUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/MessagesUpdateWithWhereUniqueWithoutCustomersInput";
import { MessagesUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/MessagesUpsertWithWhereUniqueWithoutCustomersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesUpdateManyWithoutCustomersNestedInput", {
  isAbstract: true
})
export class MessagesUpdateManyWithoutCustomersNestedInput {
  @TypeGraphQL.Field(_type => [MessagesCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: MessagesCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: MessagesCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: MessagesUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => MessagesCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: MessagesCreateManyCustomersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MessagesUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: MessagesUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: MessagesUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessagesScalarWhereInput[] | undefined;
}
