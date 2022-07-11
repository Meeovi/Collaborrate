import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { VisitsOrderByRelevanceFieldEnum } from "../../enums/VisitsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("VisitsOrderByRelevanceInput", {
  isAbstract: true
})
export class VisitsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [VisitsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"location" | "username" | "reason" | "content" | "emergency" | "start_date" | "end_date" | "task" | "meeting">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
