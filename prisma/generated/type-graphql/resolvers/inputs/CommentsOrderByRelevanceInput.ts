import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOrderByRelevanceFieldEnum } from "../../enums/CommentsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentsOrderByRelevanceInput", {
  isAbstract: true
})
export class CommentsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CommentsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"customer_name" | "description" | "image" | "response">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
