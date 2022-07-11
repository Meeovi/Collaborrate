import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsCreateManyInput } from "../../../inputs/TrainingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTrainingsArgs {
  @TypeGraphQL.Field(_type => [TrainingsCreateManyInput], {
    nullable: false
  })
  data!: TrainingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
