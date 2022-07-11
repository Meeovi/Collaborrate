import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GlossaryOrderByRelevanceFieldEnum } from "../../enums/GlossaryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GlossaryOrderByRelevanceInput", {
  isAbstract: true
})
export class GlossaryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [GlossaryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "content" | "image">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
