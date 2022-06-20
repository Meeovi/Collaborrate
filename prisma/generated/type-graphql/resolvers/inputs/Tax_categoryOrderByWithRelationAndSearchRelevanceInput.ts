import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_categoryOrderByRelevanceInput } from "../inputs/Tax_categoryOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Tax_categoryOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Tax_categoryOrderByWithRelationAndSearchRelevanceInput {
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
  default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Tax_categoryOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Tax_categoryOrderByRelevanceInput | undefined;
}
