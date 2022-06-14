import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateUpdateWithoutProductsInput } from "../inputs/Tax_rateUpdateWithoutProductsInput";
import { Tax_rateWhereUniqueInput } from "../inputs/Tax_rateWhereUniqueInput";

@TypeGraphQL.InputType("Tax_rateUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class Tax_rateUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_rateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_rateUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: Tax_rateUpdateWithoutProductsInput;
}
