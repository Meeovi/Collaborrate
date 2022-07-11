import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateWithoutOrdersInput } from "../inputs/QuotesCreateWithoutOrdersInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class QuotesCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: QuotesCreateWithoutOrdersInput;
}
