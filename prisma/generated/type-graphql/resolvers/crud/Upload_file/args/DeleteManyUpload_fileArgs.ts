import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileWhereInput, {
    nullable: true
  })
  where?: Upload_fileWhereInput | undefined;
}
