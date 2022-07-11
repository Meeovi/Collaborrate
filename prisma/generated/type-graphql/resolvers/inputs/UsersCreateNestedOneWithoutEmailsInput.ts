import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutEmailsInput } from "../inputs/UsersCreateOrConnectWithoutEmailsInput";
import { UsersCreateWithoutEmailsInput } from "../inputs/UsersCreateWithoutEmailsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutEmailsInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutEmailsInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutEmailsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutEmailsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
