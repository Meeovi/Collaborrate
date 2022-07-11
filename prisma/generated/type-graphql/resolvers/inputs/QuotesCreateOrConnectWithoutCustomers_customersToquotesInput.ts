import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateWithoutCustomers_customersToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesCreateOrConnectWithoutCustomers_customersToquotesInput", {
  isAbstract: true
})
export class QuotesCreateOrConnectWithoutCustomers_customersToquotesInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesCreateWithoutCustomers_customersToquotesInput, {
    nullable: false
  })
  create!: QuotesCreateWithoutCustomers_customersToquotesInput;
}
