import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateWithoutUsersInput } from "../inputs/EmailsCreateWithoutUsersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class EmailsCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: EmailsCreateWithoutUsersInput;
}
