import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesWhereInput, {
    nullable: true
  })
  where?: OpportunitiesWhereInput | undefined;
}
