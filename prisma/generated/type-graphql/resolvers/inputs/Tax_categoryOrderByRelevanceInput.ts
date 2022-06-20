import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { Tax_categoryOrderByRelevanceFieldEnum } from "../../enums/Tax_categoryOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("Tax_categoryOrderByRelevanceInput", {
  isAbstract: true
})
export class Tax_categoryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Tax_categoryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "default">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
