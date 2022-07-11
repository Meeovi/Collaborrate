import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnersAvgOrderByAggregateInput } from "../inputs/PartnersAvgOrderByAggregateInput";
import { PartnersCountOrderByAggregateInput } from "../inputs/PartnersCountOrderByAggregateInput";
import { PartnersMaxOrderByAggregateInput } from "../inputs/PartnersMaxOrderByAggregateInput";
import { PartnersMinOrderByAggregateInput } from "../inputs/PartnersMinOrderByAggregateInput";
import { PartnersSumOrderByAggregateInput } from "../inputs/PartnersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PartnersOrderByWithAggregationInput", {
  isAbstract: true
})
export class PartnersOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  business_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PartnersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PartnersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PartnersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PartnersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PartnersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PartnersSumOrderByAggregateInput | undefined;
}
