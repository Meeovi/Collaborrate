import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DeepdiveOrderByWithRelationAndSearchRelevanceInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveWhereInput, {
    nullable: true
  })
  where?: DeepdiveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeepdiveOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: DeepdiveOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeepdiveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
