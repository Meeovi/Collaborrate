import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesUpdateWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpdateWithoutProducts_productsToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput", {
  isAbstract: true
})
export class QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesUpdateWithoutProducts_productsToquotesInput, {
    nullable: false
  })
  data!: QuotesUpdateWithoutProducts_productsToquotesInput;
}
