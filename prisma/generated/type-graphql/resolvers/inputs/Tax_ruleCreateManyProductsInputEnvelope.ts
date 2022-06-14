import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleCreateManyProductsInput } from "../inputs/Tax_ruleCreateManyProductsInput";

@TypeGraphQL.InputType("Tax_ruleCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class Tax_ruleCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [Tax_ruleCreateManyProductsInput], {
    nullable: false
  })
  data!: Tax_ruleCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
