import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateWithoutCustomersInput } from "../inputs/EmailsCreateWithoutCustomersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class EmailsCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: EmailsCreateWithoutCustomersInput;
}
