import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileUpdateInput } from "../../../inputs/Upload_fileUpdateInput";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileUpdateInput, {
    nullable: false
  })
  data!: Upload_fileUpdateInput;

  @TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput, {
    nullable: false
  })
  where!: Upload_fileWhereUniqueInput;
}
