import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_ratesAvgOrderByAggregateInput } from "../inputs/Currency_ratesAvgOrderByAggregateInput";
import { Currency_ratesCountOrderByAggregateInput } from "../inputs/Currency_ratesCountOrderByAggregateInput";
import { Currency_ratesMaxOrderByAggregateInput } from "../inputs/Currency_ratesMaxOrderByAggregateInput";
import { Currency_ratesMinOrderByAggregateInput } from "../inputs/Currency_ratesMinOrderByAggregateInput";
import { Currency_ratesSumOrderByAggregateInput } from "../inputs/Currency_ratesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_ratesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Currency_ratesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  import_service?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usd?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Currency_ratesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Currency_ratesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Currency_ratesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Currency_ratesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Currency_ratesSumOrderByAggregateInput | undefined;
}
