import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_roles__RoleOrderByRelevanceInput } from "../inputs/Join_roles__RoleOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Join_roles__RoleOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Join_roles__RoleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  relatedId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  owningId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Join_roles__RoleOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Join_roles__RoleOrderByRelevanceInput | undefined;
}
