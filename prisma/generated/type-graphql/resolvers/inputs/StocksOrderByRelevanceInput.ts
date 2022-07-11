import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { StocksOrderByRelevanceFieldEnum } from "../../enums/StocksOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("StocksOrderByRelevanceInput", {
  isAbstract: true
})
export class StocksOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [StocksOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "website" | "sources">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
