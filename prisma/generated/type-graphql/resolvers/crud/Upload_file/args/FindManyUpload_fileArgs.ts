import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileOrderByWithRelationInput } from "../../../inputs/Upload_fileOrderByWithRelationInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";
import { Upload_fileScalarFieldEnum } from "../../../../enums/Upload_fileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileWhereInput, {
    nullable: true
  })
  where?: Upload_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Upload_fileOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Upload_fileOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput, {
    nullable: true
  })
  cursor?: Upload_fileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Upload_fileScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "alternativeText" | "caption" | "width" | "height" | "formats" | "hash" | "ext" | "mime" | "size" | "url" | "previewUrl" | "provider" | "provider_metadata" | "created_by" | "updated_by" | "created_at" | "updated_at"> | undefined;
}
