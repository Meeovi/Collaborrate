import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsUpdateWithoutChecklistInput } from "../inputs/TrainingsUpdateWithoutChecklistInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateWithWhereUniqueWithoutChecklistInput", {
  isAbstract: true
})
export class TrainingsUpdateWithWhereUniqueWithoutChecklistInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutChecklistInput, {
    nullable: false
  })
  data!: TrainingsUpdateWithoutChecklistInput;
}
