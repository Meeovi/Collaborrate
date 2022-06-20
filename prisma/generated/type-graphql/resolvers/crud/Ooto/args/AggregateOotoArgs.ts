import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OotoOrderByWithRelationAndSearchRelevanceInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOotoArgs {
  @TypeGraphQL.Field(_type => OotoWhereInput, {
    nullable: true
  })
  where?: OotoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OotoOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: OotoOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => OotoWhereUniqueInput, {
    nullable: true
  })
  cursor?: OotoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
