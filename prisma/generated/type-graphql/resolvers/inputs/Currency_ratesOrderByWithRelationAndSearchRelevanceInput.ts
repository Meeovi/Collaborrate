import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_ratesOrderByRelevanceInput } from "../inputs/Currency_ratesOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_ratesOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Currency_ratesOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  import_service?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usd?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Currency_ratesOrderByRelevanceInput | undefined;
}
