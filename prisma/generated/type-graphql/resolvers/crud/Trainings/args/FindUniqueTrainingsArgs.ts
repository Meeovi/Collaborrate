import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;
}
