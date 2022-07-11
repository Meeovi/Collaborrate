import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { Upload_fileOrderByRelevanceFieldEnum } from "../../enums/Upload_fileOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("Upload_fileOrderByRelevanceInput", {
  isAbstract: true
})
export class Upload_fileOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Upload_fileOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "alternativeText" | "caption" | "hash" | "ext" | "mime" | "url" | "previewUrl" | "provider">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
