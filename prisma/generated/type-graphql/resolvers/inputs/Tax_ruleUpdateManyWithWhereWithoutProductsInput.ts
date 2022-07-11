import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleScalarWhereInput } from "../inputs/Tax_ruleScalarWhereInput";
import { Tax_ruleUpdateManyMutationInput } from "../inputs/Tax_ruleUpdateManyMutationInput";

@TypeGraphQL.InputType("Tax_ruleUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class Tax_ruleUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => Tax_ruleScalarWhereInput, {
    nullable: false
  })
  where!: Tax_ruleScalarWhereInput;

  @TypeGraphQL.Field(_type => Tax_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Tax_ruleUpdateManyMutationInput;
}
