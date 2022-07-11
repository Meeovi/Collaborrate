import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudienceOrderByRelevanceFieldEnum } from "../../enums/AudienceOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AudienceOrderByRelevanceInput", {
  isAbstract: true
})
export class AudienceOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [AudienceOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"objectId" | "name" | "query" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
