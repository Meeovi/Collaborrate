import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsCreateInput } from "../../../inputs/OccassionsCreateInput";
import { OccassionsUpdateInput } from "../../../inputs/OccassionsUpdateInput";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccassionsCreateInput, {
    nullable: false
  })
  create!: OccassionsCreateInput;

  @TypeGraphQL.Field(_type => OccassionsUpdateInput, {
    nullable: false
  })
  update!: OccassionsUpdateInput;
}
