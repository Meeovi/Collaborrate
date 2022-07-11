import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleOrderByRelevanceFieldEnum } from "../../enums/RoleOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RoleOrderByRelevanceInput", {
  isAbstract: true
})
export class RoleOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [RoleOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"objectId" | "name" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
