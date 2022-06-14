import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentAvgOrderByAggregateInput } from "../inputs/Customer_paymentAvgOrderByAggregateInput";
import { Customer_paymentCountOrderByAggregateInput } from "../inputs/Customer_paymentCountOrderByAggregateInput";
import { Customer_paymentMaxOrderByAggregateInput } from "../inputs/Customer_paymentMaxOrderByAggregateInput";
import { Customer_paymentMinOrderByAggregateInput } from "../inputs/Customer_paymentMinOrderByAggregateInput";
import { Customer_paymentSumOrderByAggregateInput } from "../inputs/Customer_paymentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_paymentOrderByWithAggregationInput", {
  isAbstract: true
})
export class Customer_paymentOrderByWithAggregationInput {
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
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_info?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  account_no?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiry?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_paymentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Customer_paymentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_paymentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_paymentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Customer_paymentSumOrderByAggregateInput | undefined;
}
