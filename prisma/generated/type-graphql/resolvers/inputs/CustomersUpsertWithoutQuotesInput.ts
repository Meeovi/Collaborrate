import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutQuotesInput } from "../inputs/CustomersCreateWithoutQuotesInput";
import { CustomersUpdateWithoutQuotesInput } from "../inputs/CustomersUpdateWithoutQuotesInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutQuotesInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutQuotesInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutQuotesInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutQuotesInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutQuotesInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutQuotesInput;
}
