import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphCreateManyInput } from "../../../inputs/Upload_file_morphCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => [Upload_file_morphCreateManyInput], {
    nullable: false
  })
  data!: Upload_file_morphCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
