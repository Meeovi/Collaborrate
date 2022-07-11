import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;
}
