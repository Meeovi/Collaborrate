import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutReturnsInput } from "../inputs/CustomersCreateNestedOneWithoutReturnsInput";

@TypeGraphQL.InputType("ReturnsCreateWithoutProductsInput", {
  isAbstract: true
})
export class ReturnsCreateWithoutProductsInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  validity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  return_prefix?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutReturnsInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutReturnsInput | undefined;
}
