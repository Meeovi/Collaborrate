import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateWithoutProducts_productsToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesCreateOrConnectWithoutProducts_productsToquotesInput", {
  isAbstract: true
})
export class QuotesCreateOrConnectWithoutProducts_productsToquotesInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesCreateWithoutProducts_productsToquotesInput, {
    nullable: false
  })
  create!: QuotesCreateWithoutProducts_productsToquotesInput;
}
