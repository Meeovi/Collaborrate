import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApitokenOrderByRelevanceFieldEnum } from "../../enums/ApitokenOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ApitokenOrderByRelevanceInput", {
  isAbstract: true
})
export class ApitokenOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ApitokenOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "token_type" | "description">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
