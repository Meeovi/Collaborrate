import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsAvgOrderByAggregateInput } from "../inputs/EmailsAvgOrderByAggregateInput";
import { EmailsCountOrderByAggregateInput } from "../inputs/EmailsCountOrderByAggregateInput";
import { EmailsMaxOrderByAggregateInput } from "../inputs/EmailsMaxOrderByAggregateInput";
import { EmailsMinOrderByAggregateInput } from "../inputs/EmailsMinOrderByAggregateInput";
import { EmailsSumOrderByAggregateInput } from "../inputs/EmailsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmailsOrderByWithAggregationInput", {
  isAbstract: true
})
export class EmailsOrderByWithAggregationInput {
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
  subject?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bcc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  from?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmailsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EmailsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmailsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EmailsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmailsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EmailsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmailsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EmailsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmailsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EmailsSumOrderByAggregateInput | undefined;
}
