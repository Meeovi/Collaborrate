import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutStatesInput } from "../inputs/TrainingsCreateWithoutStatesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateOrConnectWithoutStatesInput", {
  isAbstract: true
})
export class TrainingsCreateOrConnectWithoutStatesInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutStatesInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutStatesInput;
}
