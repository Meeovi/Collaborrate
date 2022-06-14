import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateWithoutOrdersInput } from "../inputs/QuotesCreateWithoutOrdersInput";
import { QuotesUpdateWithoutOrdersInput } from "../inputs/QuotesUpdateWithoutOrdersInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpsertWithWhereUniqueWithoutOrdersInput", {
  isAbstract: true
})
export class QuotesUpsertWithWhereUniqueWithoutOrdersInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: QuotesUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => QuotesCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: QuotesCreateWithoutOrdersInput;
}
