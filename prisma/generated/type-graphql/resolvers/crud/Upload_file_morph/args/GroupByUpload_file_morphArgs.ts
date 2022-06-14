import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphOrderByWithAggregationInput } from "../../../inputs/Upload_file_morphOrderByWithAggregationInput";
import { Upload_file_morphScalarWhereWithAggregatesInput } from "../../../inputs/Upload_file_morphScalarWhereWithAggregatesInput";
import { Upload_file_morphWhereInput } from "../../../inputs/Upload_file_morphWhereInput";
import { Upload_file_morphScalarFieldEnum } from "../../../../enums/Upload_file_morphScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphWhereInput, {
    nullable: true
  })
  where?: Upload_file_morphWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Upload_file_morphOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "upload_file_id" | "related_id" | "related_type" | "field" | "order">;

  @TypeGraphQL.Field(_type => Upload_file_morphScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Upload_file_morphScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
