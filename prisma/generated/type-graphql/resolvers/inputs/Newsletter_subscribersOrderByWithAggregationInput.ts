import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersAvgOrderByAggregateInput } from "../inputs/Newsletter_subscribersAvgOrderByAggregateInput";
import { Newsletter_subscribersCountOrderByAggregateInput } from "../inputs/Newsletter_subscribersCountOrderByAggregateInput";
import { Newsletter_subscribersMaxOrderByAggregateInput } from "../inputs/Newsletter_subscribersMaxOrderByAggregateInput";
import { Newsletter_subscribersMinOrderByAggregateInput } from "../inputs/Newsletter_subscribersMinOrderByAggregateInput";
import { Newsletter_subscribersSumOrderByAggregateInput } from "../inputs/Newsletter_subscribersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Newsletter_subscribersOrderByWithAggregationInput", {
  isAbstract: true
})
export class Newsletter_subscribersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  websites?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Newsletter_subscribersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Newsletter_subscribersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Newsletter_subscribersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Newsletter_subscribersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Newsletter_subscribersSumOrderByAggregateInput | undefined;
}
