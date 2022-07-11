import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GlobalConfigOrderByRelevanceInput } from "../inputs/GlobalConfigOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GlobalConfigOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class GlobalConfigOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => GlobalConfigOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: GlobalConfigOrderByRelevanceInput | undefined;
}
