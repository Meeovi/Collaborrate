import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesAvgOrderByAggregateInput } from "../inputs/CountriesAvgOrderByAggregateInput";
import { CountriesCountOrderByAggregateInput } from "../inputs/CountriesCountOrderByAggregateInput";
import { CountriesMaxOrderByAggregateInput } from "../inputs/CountriesMaxOrderByAggregateInput";
import { CountriesMinOrderByAggregateInput } from "../inputs/CountriesMinOrderByAggregateInput";
import { CountriesSumOrderByAggregateInput } from "../inputs/CountriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CountriesOrderByWithAggregationInput", {
  isAbstract: true
})
export class CountriesOrderByWithAggregationInput {
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
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CountriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CountriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CountriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CountriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CountriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CountriesSumOrderByAggregateInput | undefined;
}
