import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationsOrderByRelevanceFieldEnum } from "../../enums/IntegrationsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationsOrderByRelevanceInput", {
  isAbstract: true
})
export class IntegrationsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [IntegrationsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "content" | "media" | "location" | "category">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
