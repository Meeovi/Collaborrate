import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphOrderByWithRelationInput } from "../../../inputs/Upload_file_morphOrderByWithRelationInput";
import { Upload_file_morphWhereInput } from "../../../inputs/Upload_file_morphWhereInput";
import { Upload_file_morphWhereUniqueInput } from "../../../inputs/Upload_file_morphWhereUniqueInput";
import { Upload_file_morphScalarFieldEnum } from "../../../../enums/Upload_file_morphScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphWhereInput, {
    nullable: true
  })
  where?: Upload_file_morphWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Upload_file_morphOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput, {
    nullable: true
  })
  cursor?: Upload_file_morphWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "upload_file_id" | "related_id" | "related_type" | "field" | "order"> | undefined;
}
