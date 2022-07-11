import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesOrderByRelevanceFieldEnum } from "../../enums/RolesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RolesOrderByRelevanceInput", {
  isAbstract: true
})
export class RolesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [RolesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"role_name" | "content">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
