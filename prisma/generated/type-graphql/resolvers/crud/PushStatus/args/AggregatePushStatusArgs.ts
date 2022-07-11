import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PushStatusOrderByWithRelationAndSearchRelevanceInput";
import { PushStatusWhereInput } from "../../../inputs/PushStatusWhereInput";
import { PushStatusWhereUniqueInput } from "../../../inputs/PushStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusWhereInput, {
    nullable: true
  })
  where?: PushStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PushStatusOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PushStatusOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PushStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: PushStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
