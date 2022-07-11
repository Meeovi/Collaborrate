import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerOrderByRelevanceFieldEnum } from "../../enums/MediamanagerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MediamanagerOrderByRelevanceInput", {
  isAbstract: true
})
export class MediamanagerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MediamanagerOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "media" | "keywords" | "tags" | "status" | "expiration_date" | "copyright" | "dimensions" | "content_type" | "versions" | "watermark_name" | "watermark_description" | "watermark_media" | "albums" | "workspace" | "task_description" | "task_type">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
