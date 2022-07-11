import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutChecklistInput } from "../inputs/TrainingsCreateWithoutChecklistInput";
import { TrainingsUpdateWithoutChecklistInput } from "../inputs/TrainingsUpdateWithoutChecklistInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpsertWithWhereUniqueWithoutChecklistInput", {
  isAbstract: true
})
export class TrainingsUpsertWithWhereUniqueWithoutChecklistInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutChecklistInput, {
    nullable: false
  })
  update!: TrainingsUpdateWithoutChecklistInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutChecklistInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutChecklistInput;
}
