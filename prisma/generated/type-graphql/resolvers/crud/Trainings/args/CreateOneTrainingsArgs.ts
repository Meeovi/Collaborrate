import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsCreateInput } from "../../../inputs/TrainingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsCreateInput, {
    nullable: false
  })
  data!: TrainingsCreateInput;
}
