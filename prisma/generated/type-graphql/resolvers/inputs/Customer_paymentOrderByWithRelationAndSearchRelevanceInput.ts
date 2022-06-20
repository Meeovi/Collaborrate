import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentOrderByRelevanceInput } from "../inputs/Customer_paymentOrderByRelevanceInput";
import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { TransactionsOrderByRelationAggregateInput } from "../inputs/TransactionsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_paymentOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Customer_paymentOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customers?: CustomersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsOrderByRelationAggregateInput, {
    nullable: true
  })
  transactions?: TransactionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Customer_paymentOrderByRelevanceInput | undefined;
}
