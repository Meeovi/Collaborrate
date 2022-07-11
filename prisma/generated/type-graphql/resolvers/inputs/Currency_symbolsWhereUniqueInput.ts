import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Currency_symbolsWhereUniqueInput", {
  isAbstract: true
})
export class Currency_symbolsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  symbol?: string | undefined;
}
