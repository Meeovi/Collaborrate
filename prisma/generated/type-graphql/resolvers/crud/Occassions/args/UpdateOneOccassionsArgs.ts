import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsUpdateInput } from "../../../inputs/OccassionsUpdateInput";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsUpdateInput, {
    nullable: false
  })
  data!: OccassionsUpdateInput;

  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;
}
