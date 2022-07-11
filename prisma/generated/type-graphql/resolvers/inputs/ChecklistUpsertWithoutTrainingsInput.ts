import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistCreateWithoutTrainingsInput } from "../inputs/ChecklistCreateWithoutTrainingsInput";
import { ChecklistUpdateWithoutTrainingsInput } from "../inputs/ChecklistUpdateWithoutTrainingsInput";

@TypeGraphQL.InputType("ChecklistUpsertWithoutTrainingsInput", {
  isAbstract: true
})
export class ChecklistUpsertWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => ChecklistUpdateWithoutTrainingsInput, {
    nullable: false
  })
  update!: ChecklistUpdateWithoutTrainingsInput;

  @TypeGraphQL.Field(_type => ChecklistCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: ChecklistCreateWithoutTrainingsInput;
}
