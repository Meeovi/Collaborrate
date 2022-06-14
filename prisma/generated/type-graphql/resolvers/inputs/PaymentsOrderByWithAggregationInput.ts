import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentsAvgOrderByAggregateInput } from "../inputs/PaymentsAvgOrderByAggregateInput";
import { PaymentsCountOrderByAggregateInput } from "../inputs/PaymentsCountOrderByAggregateInput";
import { PaymentsMaxOrderByAggregateInput } from "../inputs/PaymentsMaxOrderByAggregateInput";
import { PaymentsMinOrderByAggregateInput } from "../inputs/PaymentsMinOrderByAggregateInput";
import { PaymentsSumOrderByAggregateInput } from "../inputs/PaymentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PaymentsOrderByWithAggregationInput", {
  isAbstract: true
})
export class PaymentsOrderByWithAggregationInput {
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
  client_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_secret?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  host_uri?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  redirect_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  redirect_url_app?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PaymentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PaymentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PaymentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PaymentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PaymentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PaymentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PaymentsSumOrderByAggregateInput | undefined;
}
