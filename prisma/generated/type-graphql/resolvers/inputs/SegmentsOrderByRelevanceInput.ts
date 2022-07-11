import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SegmentsOrderByRelevanceFieldEnum } from "../../enums/SegmentsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SegmentsOrderByRelevanceInput", {
  isAbstract: true
})
export class SegmentsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SegmentsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "website" | "status" | "apply_to" | "customers">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
