import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingOrderByRelevanceFieldEnum } from "../../enums/RatingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RatingOrderByRelevanceInput", {
  isAbstract: true
})
export class RatingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [RatingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"default_value" | "default_store_view" | "rating_visibility">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
