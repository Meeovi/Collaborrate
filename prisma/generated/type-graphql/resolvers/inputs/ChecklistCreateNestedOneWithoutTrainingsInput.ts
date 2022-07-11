import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistCreateOrConnectWithoutTrainingsInput } from "../inputs/ChecklistCreateOrConnectWithoutTrainingsInput";
import { ChecklistCreateWithoutTrainingsInput } from "../inputs/ChecklistCreateWithoutTrainingsInput";
import { ChecklistWhereUniqueInput } from "../inputs/ChecklistWhereUniqueInput";

@TypeGraphQL.InputType("ChecklistCreateNestedOneWithoutTrainingsInput", {
  isAbstract: true
})
export class ChecklistCreateNestedOneWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => ChecklistCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: ChecklistCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: ChecklistCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: true
  })
  connect?: ChecklistWhereUniqueInput | undefined;
}
