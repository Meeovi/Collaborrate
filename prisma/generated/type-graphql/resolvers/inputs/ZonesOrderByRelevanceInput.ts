import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { ZonesOrderByRelevanceFieldEnum } from "../../enums/ZonesOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("ZonesOrderByRelevanceInput", {
  isAbstract: true
})
export class ZonesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ZonesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "scope" | "type" | "country" | "code">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
