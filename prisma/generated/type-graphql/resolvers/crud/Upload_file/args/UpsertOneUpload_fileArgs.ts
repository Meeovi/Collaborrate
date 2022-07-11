import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileCreateInput } from "../../../inputs/Upload_fileCreateInput";
import { Upload_fileUpdateInput } from "../../../inputs/Upload_fileUpdateInput";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput, {
    nullable: false
  })
  where!: Upload_fileWhereUniqueInput;

  @TypeGraphQL.Field(_type => Upload_fileCreateInput, {
    nullable: false
  })
  create!: Upload_fileCreateInput;

  @TypeGraphQL.Field(_type => Upload_fileUpdateInput, {
    nullable: false
  })
  update!: Upload_fileUpdateInput;
}
