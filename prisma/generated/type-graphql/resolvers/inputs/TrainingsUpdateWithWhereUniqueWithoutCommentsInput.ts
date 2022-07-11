import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsUpdateWithoutCommentsInput } from "../inputs/TrainingsUpdateWithoutCommentsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateWithWhereUniqueWithoutCommentsInput", {
  isAbstract: true
})
export class TrainingsUpdateWithWhereUniqueWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutCommentsInput, {
    nullable: false
  })
  data!: TrainingsUpdateWithoutCommentsInput;
}
