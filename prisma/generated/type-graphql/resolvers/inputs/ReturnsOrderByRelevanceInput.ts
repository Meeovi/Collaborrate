import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsOrderByRelevanceFieldEnum } from "../../enums/ReturnsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReturnsOrderByRelevanceInput", {
  isAbstract: true
})
export class ReturnsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ReturnsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "validity" | "return_prefix">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
