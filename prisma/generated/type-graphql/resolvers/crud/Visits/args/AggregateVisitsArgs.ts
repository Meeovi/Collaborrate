import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VisitsOrderByWithRelationAndSearchRelevanceInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsWhereInput, {
    nullable: true
  })
  where?: VisitsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VisitsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: VisitsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => VisitsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VisitsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
