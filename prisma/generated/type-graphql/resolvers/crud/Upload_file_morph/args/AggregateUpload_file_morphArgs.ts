import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Upload_file_morphOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Upload_file_morphOrderByWithRelationAndSearchRelevanceInput";
import { Upload_file_morphWhereInput } from "../../../inputs/Upload_file_morphWhereInput";
import { Upload_file_morphWhereUniqueInput } from "../../../inputs/Upload_file_morphWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUpload_file_morphArgs {
  @TypeGraphQL.Field(_type => Upload_file_morphWhereInput, {
    nullable: true
  })
  where?: Upload_file_morphWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Upload_file_morphOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput, {
    nullable: true
  })
  cursor?: Upload_file_morphWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
