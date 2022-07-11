import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelsOrderByRelevanceFieldEnum } from "../../enums/ChannelsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChannelsOrderByRelevanceInput", {
  isAbstract: true
})
export class ChannelsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ChannelsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"code" | "name" | "currency" | "default_lang" | "include_tax" | "default_zone" | "default_shipping" | "client_id" | "client_secret">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
