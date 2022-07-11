import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutCommentsInput } from "../inputs/TrainingsCreateWithoutCommentsInput";
import { TrainingsUpdateWithoutCommentsInput } from "../inputs/TrainingsUpdateWithoutCommentsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpsertWithWhereUniqueWithoutCommentsInput", {
  isAbstract: true
})
export class TrainingsUpsertWithWhereUniqueWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: TrainingsUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutCommentsInput;
}
