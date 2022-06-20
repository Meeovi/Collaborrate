import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SourceOrderByWithRelationAndSearchRelevanceInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSourceArgs {
  @TypeGraphQL.Field(_type => SourceWhereInput, {
    nullable: true
  })
  where?: SourceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SourceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SourceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SourceWhereUniqueInput, {
    nullable: true
  })
  cursor?: SourceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
