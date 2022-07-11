import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosAvgOrderByAggregateInput } from "../inputs/Credit_memosAvgOrderByAggregateInput";
import { Credit_memosCountOrderByAggregateInput } from "../inputs/Credit_memosCountOrderByAggregateInput";
import { Credit_memosMaxOrderByAggregateInput } from "../inputs/Credit_memosMaxOrderByAggregateInput";
import { Credit_memosMinOrderByAggregateInput } from "../inputs/Credit_memosMinOrderByAggregateInput";
import { Credit_memosSumOrderByAggregateInput } from "../inputs/Credit_memosSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Credit_memosOrderByWithAggregationInput", {
  isAbstract: true
})
export class Credit_memosOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  credit_memo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bill_to_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  refunded?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Credit_memosCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Credit_memosCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Credit_memosAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Credit_memosMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Credit_memosMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Credit_memosSumOrderByAggregateInput | undefined;
}
