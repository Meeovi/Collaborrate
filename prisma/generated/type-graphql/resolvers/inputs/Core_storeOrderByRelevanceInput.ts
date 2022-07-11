import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Core_storeOrderByRelevanceFieldEnum } from "../../enums/Core_storeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Core_storeOrderByRelevanceInput", {
  isAbstract: true
})
export class Core_storeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Core_storeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"key" | "value" | "type" | "environment" | "tag">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
