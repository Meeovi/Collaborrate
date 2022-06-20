import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesOrderByRelevanceFieldEnum } from "../../enums/MessagesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MessagesOrderByRelevanceInput", {
  isAbstract: true
})
export class MessagesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MessagesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"from" | "subject" | "content" | "sender" | "media">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
