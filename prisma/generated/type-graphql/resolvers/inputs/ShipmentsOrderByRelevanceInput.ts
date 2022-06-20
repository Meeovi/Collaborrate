import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShipmentsOrderByRelevanceFieldEnum } from "../../enums/ShipmentsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShipmentsOrderByRelevanceInput", {
  isAbstract: true
})
export class ShipmentsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ShipmentsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"product" | "speed_grade" | "carrier_name" | "transit_time" | "tracking_url" | "image" | "client_id" | "client_secret" | "country" | "website">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
