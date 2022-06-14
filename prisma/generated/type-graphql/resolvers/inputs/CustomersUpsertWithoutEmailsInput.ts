import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutEmailsInput } from "../inputs/CustomersCreateWithoutEmailsInput";
import { CustomersUpdateWithoutEmailsInput } from "../inputs/CustomersUpdateWithoutEmailsInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutEmailsInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutEmailsInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutEmailsInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutEmailsInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutEmailsInput;
}
