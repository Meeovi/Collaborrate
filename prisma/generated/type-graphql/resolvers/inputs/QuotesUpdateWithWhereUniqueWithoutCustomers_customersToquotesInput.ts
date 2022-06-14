import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesUpdateWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpdateWithoutCustomers_customersToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput", {
  isAbstract: true
})
export class QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesUpdateWithoutCustomers_customersToquotesInput, {
    nullable: false
  })
  data!: QuotesUpdateWithoutCustomers_customersToquotesInput;
}
