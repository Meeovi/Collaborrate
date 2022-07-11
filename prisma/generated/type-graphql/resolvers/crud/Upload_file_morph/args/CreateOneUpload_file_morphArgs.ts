import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphCreateInput } from "../../../inputs/Upload_file_morphCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphCreateInput, {
    nullable: false
  })
  data!: Upload_file_morphCreateInput;
}
