import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesCreateInput } from "../../../inputs/OpportunitiesCreateInput";
import { OpportunitiesUpdateInput } from "../../../inputs/OpportunitiesUpdateInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput, {
    nullable: false
  })
  where!: OpportunitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => OpportunitiesCreateInput, {
    nullable: false
  })
  create!: OpportunitiesCreateInput;

  @TypeGraphQL.Field(_type => OpportunitiesUpdateInput, {
    nullable: false
  })
  update!: OpportunitiesUpdateInput;
}
