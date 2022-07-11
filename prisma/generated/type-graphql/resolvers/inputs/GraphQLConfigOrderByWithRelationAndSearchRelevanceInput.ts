import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GraphQLConfigOrderByRelevanceInput } from "../inputs/GraphQLConfigOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GraphQLConfigOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class GraphQLConfigOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  objectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  config?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GraphQLConfigOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: GraphQLConfigOrderByRelevanceInput | undefined;
}
