import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesCreateManyInput } from "../../../inputs/OpportunitiesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOpportunitiesArgs {
  @TypeGraphQL.Field(_type => [OpportunitiesCreateManyInput], {
    nullable: false
  })
  data!: OpportunitiesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
