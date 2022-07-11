import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProvidersOrderByRelevanceFieldEnum } from "../../enums/ProvidersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProvidersOrderByRelevanceInput", {
  isAbstract: true
})
export class ProvidersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ProvidersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
