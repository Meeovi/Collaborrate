import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewsOrderByRelevanceFieldEnum } from "../../enums/ReviewsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReviewsOrderByRelevanceInput", {
  isAbstract: true
})
export class ReviewsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ReviewsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"first_name" | "last_name" | "content" | "websites">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
