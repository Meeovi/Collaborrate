import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;
}
