import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MediamanagerOrderByWithRelationAndSearchRelevanceInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  where?: MediamanagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MediamanagerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: true
  })
  cursor?: MediamanagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
