import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateScalarWhereInput } from "../inputs/Tax_rateScalarWhereInput";
import { Tax_rateUpdateManyMutationInput } from "../inputs/Tax_rateUpdateManyMutationInput";

@TypeGraphQL.InputType("Tax_rateUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class Tax_rateUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => Tax_rateScalarWhereInput, {
    nullable: false
  })
  where!: Tax_rateScalarWhereInput;

  @TypeGraphQL.Field(_type => Tax_rateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Tax_rateUpdateManyMutationInput;
}
