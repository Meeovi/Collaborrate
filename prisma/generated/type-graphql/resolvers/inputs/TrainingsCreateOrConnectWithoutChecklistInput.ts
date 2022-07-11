import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutChecklistInput } from "../inputs/TrainingsCreateWithoutChecklistInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateOrConnectWithoutChecklistInput", {
  isAbstract: true
})
export class TrainingsCreateOrConnectWithoutChecklistInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutChecklistInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutChecklistInput;
}
