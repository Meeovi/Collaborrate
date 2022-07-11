import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { Upload_file_morphOrderByRelevanceFieldEnum } from "../../enums/Upload_file_morphOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("Upload_file_morphOrderByRelevanceInput", {
  isAbstract: true
})
export class Upload_file_morphOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Upload_file_morphOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"related_type" | "field">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
