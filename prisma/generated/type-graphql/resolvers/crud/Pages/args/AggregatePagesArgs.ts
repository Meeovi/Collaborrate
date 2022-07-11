import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PagesOrderByWithRelationAndSearchRelevanceInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePagesArgs {
  @TypeGraphQL.Field(_type => PagesWhereInput, {
    nullable: true
  })
  where?: PagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PagesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PagesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PagesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
