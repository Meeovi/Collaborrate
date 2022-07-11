import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_symbolsOrderByRelevanceFieldEnum } from "../../enums/Currency_symbolsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_symbolsOrderByRelevanceInput", {
  isAbstract: true
})
export class Currency_symbolsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Currency_symbolsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "symbol"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
