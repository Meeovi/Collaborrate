import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GraphQLConfigCountOrderByAggregateInput } from "../inputs/GraphQLConfigCountOrderByAggregateInput";
import { GraphQLConfigMaxOrderByAggregateInput } from "../inputs/GraphQLConfigMaxOrderByAggregateInput";
import { GraphQLConfigMinOrderByAggregateInput } from "../inputs/GraphQLConfigMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GraphQLConfigOrderByWithAggregationInput", {
  isAbstract: true
})
export class GraphQLConfigOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  objectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  config?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GraphQLConfigCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GraphQLConfigCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLConfigMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GraphQLConfigMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLConfigMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GraphQLConfigMinOrderByAggregateInput | undefined;
}
