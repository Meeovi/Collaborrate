import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_symbolsCountOrderByAggregateInput } from "../inputs/Currency_symbolsCountOrderByAggregateInput";
import { Currency_symbolsMaxOrderByAggregateInput } from "../inputs/Currency_symbolsMaxOrderByAggregateInput";
import { Currency_symbolsMinOrderByAggregateInput } from "../inputs/Currency_symbolsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_symbolsOrderByWithAggregationInput", {
  isAbstract: true
})
export class Currency_symbolsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  symbol?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  use_standard?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Currency_symbolsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Currency_symbolsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_symbolsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Currency_symbolsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_symbolsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Currency_symbolsMinOrderByAggregateInput | undefined;
}
