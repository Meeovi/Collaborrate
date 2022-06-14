import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutMessagesInput } from "../inputs/UsersCreateOrConnectWithoutMessagesInput";
import { UsersCreateWithoutMessagesInput } from "../inputs/UsersCreateWithoutMessagesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutMessagesInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
