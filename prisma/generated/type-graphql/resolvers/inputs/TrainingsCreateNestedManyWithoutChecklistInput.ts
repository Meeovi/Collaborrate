import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyChecklistInputEnvelope } from "../inputs/TrainingsCreateManyChecklistInputEnvelope";
import { TrainingsCreateOrConnectWithoutChecklistInput } from "../inputs/TrainingsCreateOrConnectWithoutChecklistInput";
import { TrainingsCreateWithoutChecklistInput } from "../inputs/TrainingsCreateWithoutChecklistInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateNestedManyWithoutChecklistInput", {
  isAbstract: true
})
export class TrainingsCreateNestedManyWithoutChecklistInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutChecklistInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutChecklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutChecklistInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutChecklistInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyChecklistInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyChecklistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  connect?: TrainingsWhereUniqueInput[] | undefined;
}
