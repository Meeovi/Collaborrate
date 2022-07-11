import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateNestedOneWithoutTax_ruleInput } from "../inputs/ProductsCreateNestedOneWithoutTax_ruleInput";

@TypeGraphQL.InputType("Tax_ruleCreateInput", {
  isAbstract: true
})
export class Tax_ruleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_rate?: string | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutTax_ruleInput, {
    nullable: true
  })
  products?: ProductsCreateNestedOneWithoutTax_ruleInput | undefined;
}
