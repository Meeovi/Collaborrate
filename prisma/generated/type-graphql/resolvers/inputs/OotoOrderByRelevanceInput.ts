import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OotoOrderByRelevanceFieldEnum } from "../../enums/OotoOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OotoOrderByRelevanceInput", {
  isAbstract: true
})
export class OotoOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [OotoOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"login" | "start_date" | "end_date" | "note" | "using_time" | "location">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
