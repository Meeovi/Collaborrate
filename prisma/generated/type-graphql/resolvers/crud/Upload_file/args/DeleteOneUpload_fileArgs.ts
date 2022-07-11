import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput, {
    nullable: false
  })
  where!: Upload_fileWhereUniqueInput;
}
