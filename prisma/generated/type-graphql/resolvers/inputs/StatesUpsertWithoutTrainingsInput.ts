import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesCreateWithoutTrainingsInput } from "../inputs/StatesCreateWithoutTrainingsInput";
import { StatesUpdateWithoutTrainingsInput } from "../inputs/StatesUpdateWithoutTrainingsInput";

@TypeGraphQL.InputType("StatesUpsertWithoutTrainingsInput", {
  isAbstract: true
})
export class StatesUpsertWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => StatesUpdateWithoutTrainingsInput, {
    nullable: false
  })
  update!: StatesUpdateWithoutTrainingsInput;

  @TypeGraphQL.Field(_type => StatesCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: StatesCreateWithoutTrainingsInput;
}
