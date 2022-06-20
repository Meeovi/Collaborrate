import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsOrderByRelevanceFieldEnum } from "../../enums/OccassionsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OccassionsOrderByRelevanceInput", {
  isAbstract: true
})
export class OccassionsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [OccassionsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"code" | "name" | "category" | "tags" | "description">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
