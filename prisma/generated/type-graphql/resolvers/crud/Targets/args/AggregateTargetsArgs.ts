import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TargetsOrderByWithRelationAndSearchRelevanceInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsWhereInput, {
    nullable: true
  })
  where?: TargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TargetsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TargetsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TargetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TargetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
