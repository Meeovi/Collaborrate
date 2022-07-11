import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_users__RoleOrderByRelevanceFieldEnum } from "../../enums/Join_users__RoleOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Join_users__RoleOrderByRelevanceInput", {
  isAbstract: true
})
export class Join_users__RoleOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Join_users__RoleOrderByRelevanceFieldEnum], {
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
