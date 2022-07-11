import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutCommentsInput } from "../inputs/TrainingsCreateWithoutCommentsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class TrainingsCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutCommentsInput;
}
