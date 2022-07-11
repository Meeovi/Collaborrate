import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsAvgOrderByAggregateInput } from "../inputs/AgreementsAvgOrderByAggregateInput";
import { AgreementsCountOrderByAggregateInput } from "../inputs/AgreementsCountOrderByAggregateInput";
import { AgreementsMaxOrderByAggregateInput } from "../inputs/AgreementsMaxOrderByAggregateInput";
import { AgreementsMinOrderByAggregateInput } from "../inputs/AgreementsMinOrderByAggregateInput";
import { AgreementsSumOrderByAggregateInput } from "../inputs/AgreementsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AgreementsOrderByWithAggregationInput", {
  isAbstract: true
})
export class AgreementsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reference_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  excerpt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shop_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AgreementsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AgreementsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AgreementsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AgreementsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AgreementsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AgreementsSumOrderByAggregateInput | undefined;
}
