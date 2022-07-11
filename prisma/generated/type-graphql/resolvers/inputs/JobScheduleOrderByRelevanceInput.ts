import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobScheduleOrderByRelevanceFieldEnum } from "../../enums/JobScheduleOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("JobScheduleOrderByRelevanceInput", {
  isAbstract: true
})
export class JobScheduleOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [JobScheduleOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"objectId" | "jobName" | "description" | "params" | "startAfter" | "timeOfDay" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
