import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobStatusOrderByRelevanceFieldEnum } from "../../enums/JobStatusOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("JobStatusOrderByRelevanceInput", {
  isAbstract: true
})
export class JobStatusOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [JobStatusOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"objectId" | "jobName" | "source" | "status" | "message" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
