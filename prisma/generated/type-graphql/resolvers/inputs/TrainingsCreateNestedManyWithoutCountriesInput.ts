import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyCountriesInputEnvelope } from "../inputs/TrainingsCreateManyCountriesInputEnvelope";
import { TrainingsCreateOrConnectWithoutCountriesInput } from "../inputs/TrainingsCreateOrConnectWithoutCountriesInput";
import { TrainingsCreateWithoutCountriesInput } from "../inputs/TrainingsCreateWithoutCountriesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateNestedManyWithoutCountriesInput", {
  isAbstract: true
})
export class TrainingsCreateNestedManyWithoutCountriesInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutCountriesInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutCountriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutCountriesInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutCountriesInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyCountriesInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyCountriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  connect?: TrainingsWhereUniqueInput[] | undefined;
}
