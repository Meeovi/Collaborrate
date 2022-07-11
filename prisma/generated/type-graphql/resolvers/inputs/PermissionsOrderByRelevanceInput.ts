import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionsOrderByRelevanceFieldEnum } from "../../enums/PermissionsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PermissionsOrderByRelevanceInput", {
  isAbstract: true
})
export class PermissionsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PermissionsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "content" | "role" | "create" | "read" | "update" | "delete" | "users">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
