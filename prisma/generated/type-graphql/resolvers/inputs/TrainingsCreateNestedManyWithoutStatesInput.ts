import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyStatesInputEnvelope } from "../inputs/TrainingsCreateManyStatesInputEnvelope";
import { TrainingsCreateOrConnectWithoutStatesInput } from "../inputs/TrainingsCreateOrConnectWithoutStatesInput";
import { TrainingsCreateWithoutStatesInput } from "../inputs/TrainingsCreateWithoutStatesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateNestedManyWithoutStatesInput", {
  isAbstract: true
})
export class TrainingsCreateNestedManyWithoutStatesInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutStatesInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutStatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutStatesInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutStatesInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyStatesInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyStatesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  connect?: TrainingsWhereUniqueInput[] | undefined;
}
