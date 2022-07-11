import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutMediamanagerInput } from "../inputs/UsersCreateWithoutMediamanagerInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutMediamanagerInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: UsersCreateWithoutMediamanagerInput;
}
