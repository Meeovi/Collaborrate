import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileOrderByWithAggregationInput } from "../../../inputs/Upload_fileOrderByWithAggregationInput";
import { Upload_fileScalarWhereWithAggregatesInput } from "../../../inputs/Upload_fileScalarWhereWithAggregatesInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";
import { Upload_fileScalarFieldEnum } from "../../../../enums/Upload_fileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileWhereInput, {
    nullable: true
  })
  where?: Upload_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Upload_fileOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Upload_fileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Upload_fileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "alternativeText" | "caption" | "width" | "height" | "formats" | "hash" | "ext" | "mime" | "size" | "url" | "previewUrl" | "provider" | "provider_metadata" | "created_by" | "updated_by" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Upload_fileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Upload_fileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
