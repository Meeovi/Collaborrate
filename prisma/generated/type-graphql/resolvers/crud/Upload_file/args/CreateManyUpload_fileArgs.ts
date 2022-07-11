import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileCreateManyInput } from "../../../inputs/Upload_fileCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUpload_fileArgs {
  @TypeGraphQL.Field(_type => [Upload_fileCreateManyInput], {
    nullable: false
  })
  data!: Upload_fileCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
