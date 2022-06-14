import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileCreateInput } from "../../../inputs/Upload_fileCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileCreateInput, {
    nullable: false
  })
  data!: Upload_fileCreateInput;
}
