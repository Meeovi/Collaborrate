import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { WorkspacesOrderByRelevanceFieldEnum } from "../../enums/WorkspacesOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("WorkspacesOrderByRelevanceInput", {
  isAbstract: true
})
export class WorkspacesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [WorkspacesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"code" | "name" | "description" | "author" | "media">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
