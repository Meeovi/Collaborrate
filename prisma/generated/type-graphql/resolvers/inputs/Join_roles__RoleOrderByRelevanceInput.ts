import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_roles__RoleOrderByRelevanceFieldEnum } from "../../enums/Join_roles__RoleOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Join_roles__RoleOrderByRelevanceInput", {
  isAbstract: true
})
export class Join_roles__RoleOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Join_roles__RoleOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"relatedId" | "owningId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
