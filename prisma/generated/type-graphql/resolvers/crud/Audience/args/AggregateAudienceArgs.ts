import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudienceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AudienceOrderByWithRelationAndSearchRelevanceInput";
import { AudienceWhereInput } from "../../../inputs/AudienceWhereInput";
import { AudienceWhereUniqueInput } from "../../../inputs/AudienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAudienceArgs {
  @TypeGraphQL.Field(_type => AudienceWhereInput, {
    nullable: true
  })
  where?: AudienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AudienceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: AudienceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => AudienceWhereUniqueInput, {
    nullable: true
  })
  cursor?: AudienceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
