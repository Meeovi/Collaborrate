import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_symbolsOrderByRelevanceInput } from "../inputs/Currency_symbolsOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_symbolsOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Currency_symbolsOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  symbol?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  use_standard?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Currency_symbolsOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Currency_symbolsOrderByRelevanceInput | undefined;
}
