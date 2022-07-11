import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesUpdateInput } from "../../../inputs/OpportunitiesUpdateInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesUpdateInput, {
    nullable: false
  })
  data!: OpportunitiesUpdateInput;

  @TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput, {
    nullable: false
  })
  where!: OpportunitiesWhereUniqueInput;
}
