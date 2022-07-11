import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsCreateInput } from "../../../inputs/TrainingsCreateInput";
import { TrainingsUpdateInput } from "../../../inputs/TrainingsUpdateInput";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsCreateInput, {
    nullable: false
  })
  create!: TrainingsCreateInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateInput, {
    nullable: false
  })
  update!: TrainingsUpdateInput;
}
