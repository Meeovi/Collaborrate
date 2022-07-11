import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyMutationInput } from "../inputs/QuotesUpdateManyMutationInput";

@TypeGraphQL.InputType("QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput", {
  isAbstract: true
})
export class QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput {
  @TypeGraphQL.Field(_type => QuotesScalarWhereInput, {
    nullable: false
  })
  where!: QuotesScalarWhereInput;

  @TypeGraphQL.Field(_type => QuotesUpdateManyMutationInput, {
    nullable: false
  })
  data!: QuotesUpdateManyMutationInput;
}
