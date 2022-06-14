import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCredit_memosInput } from "../inputs/CustomersCreateWithoutCredit_memosInput";
import { CustomersUpdateWithoutCredit_memosInput } from "../inputs/CustomersUpdateWithoutCredit_memosInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutCredit_memosInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutCredit_memosInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCredit_memosInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutCredit_memosInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCredit_memosInput;
}
