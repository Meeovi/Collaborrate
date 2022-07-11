import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationsAvgOrderByAggregateInput } from "../inputs/InvitationsAvgOrderByAggregateInput";
import { InvitationsCountOrderByAggregateInput } from "../inputs/InvitationsCountOrderByAggregateInput";
import { InvitationsMaxOrderByAggregateInput } from "../inputs/InvitationsMaxOrderByAggregateInput";
import { InvitationsMinOrderByAggregateInput } from "../inputs/InvitationsMinOrderByAggregateInput";
import { InvitationsSumOrderByAggregateInput } from "../inputs/InvitationsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InvitationsOrderByWithAggregationInput", {
  isAbstract: true
})
export class InvitationsOrderByWithAggregationInput {
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
  invoiceDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  billingAddress?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shippingAddress?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grandTotalPurchased?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  paymentMethod?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InvitationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InvitationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvitationsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InvitationsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvitationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InvitationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvitationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InvitationsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvitationsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InvitationsSumOrderByAggregateInput | undefined;
}
