import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateCreateManyProductsInput } from "../inputs/Tax_rateCreateManyProductsInput";

@TypeGraphQL.InputType("Tax_rateCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class Tax_rateCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [Tax_rateCreateManyProductsInput], {
    nullable: false
  })
  data!: Tax_rateCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
