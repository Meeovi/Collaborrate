import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleCreateWithoutProductsInput } from "../inputs/Tax_ruleCreateWithoutProductsInput";
import { Tax_ruleUpdateWithoutProductsInput } from "../inputs/Tax_ruleUpdateWithoutProductsInput";
import { Tax_ruleWhereUniqueInput } from "../inputs/Tax_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Tax_ruleUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class Tax_ruleUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_ruleUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: Tax_ruleUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => Tax_ruleCreateWithoutProductsInput, {
    nullable: false
  })
  create!: Tax_ruleCreateWithoutProductsInput;
}
