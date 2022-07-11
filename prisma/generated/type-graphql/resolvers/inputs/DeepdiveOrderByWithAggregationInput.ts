import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeepdiveAvgOrderByAggregateInput } from "../inputs/DeepdiveAvgOrderByAggregateInput";
import { DeepdiveCountOrderByAggregateInput } from "../inputs/DeepdiveCountOrderByAggregateInput";
import { DeepdiveMaxOrderByAggregateInput } from "../inputs/DeepdiveMaxOrderByAggregateInput";
import { DeepdiveMinOrderByAggregateInput } from "../inputs/DeepdiveMinOrderByAggregateInput";
import { DeepdiveSumOrderByAggregateInput } from "../inputs/DeepdiveSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeepdiveOrderByWithAggregationInput", {
  isAbstract: true
})
export class DeepdiveOrderByWithAggregationInput {
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
  end_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attendees?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  login?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  whid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeepdiveCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DeepdiveCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeepdiveAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DeepdiveAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeepdiveMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DeepdiveMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeepdiveMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DeepdiveMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeepdiveSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DeepdiveSumOrderByAggregateInput | undefined;
}
