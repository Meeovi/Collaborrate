import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutReturnsInput } from "../inputs/CustomersCreateWithoutReturnsInput";
import { CustomersUpdateWithoutReturnsInput } from "../inputs/CustomersUpdateWithoutReturnsInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutReturnsInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutReturnsInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutReturnsInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutReturnsInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutReturnsInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutReturnsInput;
}
