import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateManyUsersInputEnvelope } from "../inputs/MessagesCreateManyUsersInputEnvelope";
import { MessagesCreateOrConnectWithoutUsersInput } from "../inputs/MessagesCreateOrConnectWithoutUsersInput";
import { MessagesCreateWithoutUsersInput } from "../inputs/MessagesCreateWithoutUsersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class MessagesCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [MessagesCreateWithoutUsersInput], {
    nullable: true
  })
  create?: MessagesCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: MessagesCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => MessagesCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: MessagesCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereUniqueInput], {
    nullable: true
  })
  connect?: MessagesWhereUniqueInput[] | undefined;
}
