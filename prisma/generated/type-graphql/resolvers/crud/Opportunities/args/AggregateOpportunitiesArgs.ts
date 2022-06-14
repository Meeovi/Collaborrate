import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesOrderByWithRelationInput } from "../../../inputs/OpportunitiesOrderByWithRelationInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesWhereInput, {
    nullable: true
  })
  where?: OpportunitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OpportunitiesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OpportunitiesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput, {
    nullable: true
  })
  cursor?: OpportunitiesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
