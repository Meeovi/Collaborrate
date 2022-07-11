import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeepdiveOrderByRelevanceFieldEnum } from "../../enums/DeepdiveOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeepdiveOrderByRelevanceInput", {
  isAbstract: true
})
export class DeepdiveOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [DeepdiveOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"end_date" | "content" | "attendees" | "login" | "start_date" | "whid">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
