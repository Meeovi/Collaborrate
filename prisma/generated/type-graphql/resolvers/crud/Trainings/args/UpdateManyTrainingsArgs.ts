import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsUpdateManyMutationInput } from "../../../inputs/TrainingsUpdateManyMutationInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrainingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  where?: TrainingsWhereInput | undefined;
}
