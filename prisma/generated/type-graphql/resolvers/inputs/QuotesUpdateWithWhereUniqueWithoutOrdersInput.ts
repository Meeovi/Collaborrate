import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesUpdateWithoutOrdersInput } from "../inputs/QuotesUpdateWithoutOrdersInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpdateWithWhereUniqueWithoutOrdersInput", {
  isAbstract: true
})
export class QuotesUpdateWithWhereUniqueWithoutOrdersInput {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuotesUpdateWithoutOrdersInput, {
    nullable: false
  })
  data!: QuotesUpdateWithoutOrdersInput;
}
