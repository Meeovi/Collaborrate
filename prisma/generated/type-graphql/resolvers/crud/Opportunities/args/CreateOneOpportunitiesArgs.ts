import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesCreateInput } from "../../../inputs/OpportunitiesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesCreateInput, {
    nullable: false
  })
  data!: OpportunitiesCreateInput;
}
