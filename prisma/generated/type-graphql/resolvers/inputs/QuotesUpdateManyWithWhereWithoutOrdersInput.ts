import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyMutationInput } from "../inputs/QuotesUpdateManyMutationInput";

@TypeGraphQL.InputType("QuotesUpdateManyWithWhereWithoutOrdersInput", {
  isAbstract: true
})
export class QuotesUpdateManyWithWhereWithoutOrdersInput {
  @TypeGraphQL.Field(_type => QuotesScalarWhereInput, {
    nullable: false
  })
  where!: QuotesScalarWhereInput;

  @TypeGraphQL.Field(_type => QuotesUpdateManyMutationInput, {
    nullable: false
  })
  data!: QuotesUpdateManyMutationInput;
}
