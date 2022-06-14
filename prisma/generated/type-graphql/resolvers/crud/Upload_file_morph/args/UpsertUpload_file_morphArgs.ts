import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphCreateInput } from "../../../inputs/Upload_file_morphCreateInput";
import { Upload_file_morphUpdateInput } from "../../../inputs/Upload_file_morphUpdateInput";
import { Upload_file_morphWhereUniqueInput } from "../../../inputs/Upload_file_morphWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput, {
    nullable: false
  })
  where!: Upload_file_morphWhereUniqueInput;

  @TypeGraphQL.Field(_type => Upload_file_morphCreateInput, {
    nullable: false
  })
  create!: Upload_file_morphCreateInput;

  @TypeGraphQL.Field(_type => Upload_file_morphUpdateInput, {
    nullable: false
  })
  update!: Upload_file_morphUpdateInput;
}
