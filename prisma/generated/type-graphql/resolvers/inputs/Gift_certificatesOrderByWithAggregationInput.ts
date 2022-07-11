import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gift_certificatesAvgOrderByAggregateInput } from "../inputs/Gift_certificatesAvgOrderByAggregateInput";
import { Gift_certificatesCountOrderByAggregateInput } from "../inputs/Gift_certificatesCountOrderByAggregateInput";
import { Gift_certificatesMaxOrderByAggregateInput } from "../inputs/Gift_certificatesMaxOrderByAggregateInput";
import { Gift_certificatesMinOrderByAggregateInput } from "../inputs/Gift_certificatesMinOrderByAggregateInput";
import { Gift_certificatesSumOrderByAggregateInput } from "../inputs/Gift_certificatesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Gift_certificatesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Gift_certificatesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  excerpt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  special_offers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rewards?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  coupons?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categories?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  articles?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  users?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Gift_certificatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Gift_certificatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Gift_certificatesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Gift_certificatesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Gift_certificatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Gift_certificatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Gift_certificatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Gift_certificatesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Gift_certificatesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Gift_certificatesSumOrderByAggregateInput | undefined;
}
