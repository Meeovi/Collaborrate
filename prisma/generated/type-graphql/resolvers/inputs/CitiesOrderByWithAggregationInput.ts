import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CitiesAvgOrderByAggregateInput } from "../inputs/CitiesAvgOrderByAggregateInput";
import { CitiesCountOrderByAggregateInput } from "../inputs/CitiesCountOrderByAggregateInput";
import { CitiesMaxOrderByAggregateInput } from "../inputs/CitiesMaxOrderByAggregateInput";
import { CitiesMinOrderByAggregateInput } from "../inputs/CitiesMinOrderByAggregateInput";
import { CitiesSumOrderByAggregateInput } from "../inputs/CitiesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CitiesOrderByWithAggregationInput", {
  isAbstract: true
})
export class CitiesOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

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
  postalCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CitiesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CitiesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CitiesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CitiesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CitiesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CitiesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CitiesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CitiesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CitiesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CitiesSumOrderByAggregateInput | undefined;
}
