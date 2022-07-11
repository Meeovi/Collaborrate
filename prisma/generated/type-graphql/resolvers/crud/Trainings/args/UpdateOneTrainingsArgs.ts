import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsUpdateInput } from "../../../inputs/TrainingsUpdateInput";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsUpdateInput, {
    nullable: false
  })
  data!: TrainingsUpdateInput;

  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;
}
