import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { SourceOrderByRelevanceFieldEnum } from "../../enums/SourceOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("SourceOrderByRelevanceInput", {
  isAbstract: true
})
export class SourceOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SourceOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "latitude" | "longitude" | "contact_name" | "email" | "country" | "state" | "city" | "street">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
