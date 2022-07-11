import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  where?: TrainingsWhereInput | undefined;
}
