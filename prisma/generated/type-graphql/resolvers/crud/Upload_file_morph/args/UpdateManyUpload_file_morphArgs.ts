import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphUpdateManyMutationInput } from "../../../inputs/Upload_file_morphUpdateManyMutationInput";
import { Upload_file_morphWhereInput } from "../../../inputs/Upload_file_morphWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphUpdateManyMutationInput, {
    nullable: false
  })
  data!: Upload_file_morphUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Upload_file_morphWhereInput, {
    nullable: true
  })
  where?: Upload_file_morphWhereInput | undefined;
}
