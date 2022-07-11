import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PushStatusOrderByRelevanceFieldEnum } from "../../enums/PushStatusOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PushStatusOrderByRelevanceInput", {
  isAbstract: true
})
export class PushStatusOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PushStatusOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"objectId" | "pushTime" | "source" | "query" | "payload" | "title" | "status" | "pushHash" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
