import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphWhereUniqueInput } from "../../../inputs/Upload_file_morphWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput, {
    nullable: false
  })
  where!: Upload_file_morphWhereUniqueInput;
}
