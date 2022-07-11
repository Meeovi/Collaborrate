import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileUpdateManyMutationInput } from "../../../inputs/Upload_fileUpdateManyMutationInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileUpdateManyMutationInput, {
    nullable: false
  })
  data!: Upload_fileUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Upload_fileWhereInput, {
    nullable: true
  })
  where?: Upload_fileWhereInput | undefined;
}
