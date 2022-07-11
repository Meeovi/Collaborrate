import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistCreateWithoutTrainingsInput } from "../inputs/ChecklistCreateWithoutTrainingsInput";
import { ChecklistWhereUniqueInput } from "../inputs/ChecklistWhereUniqueInput";

@TypeGraphQL.InputType("ChecklistCreateOrConnectWithoutTrainingsInput", {
  isAbstract: true
})
export class ChecklistCreateOrConnectWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: false
  })
  where!: ChecklistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChecklistCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: ChecklistCreateWithoutTrainingsInput;
}
