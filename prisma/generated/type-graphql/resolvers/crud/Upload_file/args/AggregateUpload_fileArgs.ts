import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_fileOrderByWithRelationInput } from "../../../inputs/Upload_fileOrderByWithRelationInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUpload_fileArgs {
  @TypeGraphQL.Field(_type => Upload_fileWhereInput, {
    nullable: true
  })
  where?: Upload_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Upload_fileOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Upload_fileOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput, {
    nullable: true
  })
  cursor?: Upload_fileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
