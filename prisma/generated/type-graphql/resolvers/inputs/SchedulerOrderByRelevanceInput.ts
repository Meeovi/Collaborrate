import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulerOrderByRelevanceFieldEnum } from "../../enums/SchedulerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchedulerOrderByRelevanceInput", {
  isAbstract: true
})
export class SchedulerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SchedulerOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"end_date" | "level" | "login" | "notes" | "start_date" | "whid">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
