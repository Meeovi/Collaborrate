import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudienceAvgOrderByAggregateInput } from "../inputs/AudienceAvgOrderByAggregateInput";
import { AudienceCountOrderByAggregateInput } from "../inputs/AudienceCountOrderByAggregateInput";
import { AudienceMaxOrderByAggregateInput } from "../inputs/AudienceMaxOrderByAggregateInput";
import { AudienceMinOrderByAggregateInput } from "../inputs/AudienceMinOrderByAggregateInput";
import { AudienceSumOrderByAggregateInput } from "../inputs/AudienceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AudienceOrderByWithAggregationInput", {
  isAbstract: true
})
export class AudienceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  objectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  query?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastUsed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesUsed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AudienceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AudienceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AudienceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AudienceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AudienceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AudienceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AudienceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AudienceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AudienceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AudienceSumOrderByAggregateInput | undefined;
}
