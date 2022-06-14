import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphUpdateInput } from "../../../inputs/Upload_file_morphUpdateInput";
import { Upload_file_morphWhereUniqueInput } from "../../../inputs/Upload_file_morphWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphUpdateInput, {
    nullable: false
  })
  data!: Upload_file_morphUpdateInput;

  @TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput, {
    nullable: false
  })
  where!: Upload_file_morphWhereUniqueInput;
}
