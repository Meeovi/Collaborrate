import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerOrderByRelevanceFieldEnum } from "../../enums/ManufacturerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ManufacturerOrderByRelevanceInput", {
  isAbstract: true
})
export class ManufacturerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ManufacturerOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"code" | "name" | "country" | "state" | "isPublic" | "city" | "description" | "media">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
