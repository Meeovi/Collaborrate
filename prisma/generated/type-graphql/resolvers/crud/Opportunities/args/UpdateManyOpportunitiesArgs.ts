import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesUpdateManyMutationInput } from "../../../inputs/OpportunitiesUpdateManyMutationInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesUpdateManyMutationInput, {
    nullable: false
  })
  data!: OpportunitiesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OpportunitiesWhereInput, {
    nullable: true
  })
  where?: OpportunitiesWhereInput | undefined;
}
