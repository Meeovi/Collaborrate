import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GlobalConfigCountOrderByAggregateInput } from "../inputs/GlobalConfigCountOrderByAggregateInput";
import { GlobalConfigMaxOrderByAggregateInput } from "../inputs/GlobalConfigMaxOrderByAggregateInput";
import { GlobalConfigMinOrderByAggregateInput } from "../inputs/GlobalConfigMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GlobalConfigOrderByWithAggregationInput", {
  isAbstract: true
})
export class GlobalConfigOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  objectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  params?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  masterKeyOnly?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GlobalConfigCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GlobalConfigCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GlobalConfigMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GlobalConfigMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GlobalConfigMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GlobalConfigMinOrderByAggregateInput | undefined;
}
