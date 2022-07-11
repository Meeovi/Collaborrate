import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput, {
    nullable: false
  })
  where!: OpportunitiesWhereUniqueInput;
}
