import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrenciesAvgOrderByAggregateInput } from "../inputs/CurrenciesAvgOrderByAggregateInput";
import { CurrenciesCountOrderByAggregateInput } from "../inputs/CurrenciesCountOrderByAggregateInput";
import { CurrenciesMaxOrderByAggregateInput } from "../inputs/CurrenciesMaxOrderByAggregateInput";
import { CurrenciesMinOrderByAggregateInput } from "../inputs/CurrenciesMinOrderByAggregateInput";
import { CurrenciesSumOrderByAggregateInput } from "../inputs/CurrenciesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CurrenciesOrderByWithAggregationInput", {
  isAbstract: true
})
export class CurrenciesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CurrenciesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CurrenciesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrenciesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CurrenciesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrenciesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CurrenciesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrenciesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CurrenciesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrenciesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CurrenciesSumOrderByAggregateInput | undefined;
}
