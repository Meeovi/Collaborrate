import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleUpdateWithoutProductsInput } from "../inputs/Tax_ruleUpdateWithoutProductsInput";
import { Tax_ruleWhereUniqueInput } from "../inputs/Tax_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Tax_ruleUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class Tax_ruleUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_ruleUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: Tax_ruleUpdateWithoutProductsInput;
}
