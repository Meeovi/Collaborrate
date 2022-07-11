import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateWithoutProducts_productsToquotesInput";
import { QuotesUpdateWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpdateWithoutProducts_productsToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput", {
  isAbstract: true
})
export class QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesUpdateWithoutProducts_productsToquotesInput, {
    nullable: false
  })
  update!: QuotesUpdateWithoutProducts_productsToquotesInput;

  @TypeGraphQL.Field(_type => QuotesCreateWithoutProducts_productsToquotesInput, {
    nullable: false
  })
  create!: QuotesCreateWithoutProducts_productsToquotesInput;
}
