import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutOrdersInput } from "../inputs/CustomersCreateWithoutOrdersInput";
import { CustomersUpdateWithoutOrdersInput } from "../inputs/CustomersUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutOrdersInput;
}
