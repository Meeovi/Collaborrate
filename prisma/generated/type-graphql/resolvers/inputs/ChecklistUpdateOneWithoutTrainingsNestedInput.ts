import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistCreateOrConnectWithoutTrainingsInput } from "../inputs/ChecklistCreateOrConnectWithoutTrainingsInput";
import { ChecklistCreateWithoutTrainingsInput } from "../inputs/ChecklistCreateWithoutTrainingsInput";
import { ChecklistUpdateWithoutTrainingsInput } from "../inputs/ChecklistUpdateWithoutTrainingsInput";
import { ChecklistUpsertWithoutTrainingsInput } from "../inputs/ChecklistUpsertWithoutTrainingsInput";
import { ChecklistWhereUniqueInput } from "../inputs/ChecklistWhereUniqueInput";

@TypeGraphQL.InputType("ChecklistUpdateOneWithoutTrainingsNestedInput", {
  isAbstract: true
})
export class ChecklistUpdateOneWithoutTrainingsNestedInput {
  @TypeGraphQL.Field(_type => ChecklistCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: ChecklistCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: ChecklistCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistUpsertWithoutTrainingsInput, {
    nullable: true
  })
  upsert?: ChecklistUpsertWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: true
  })
  connect?: ChecklistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistUpdateWithoutTrainingsInput, {
    nullable: true
  })
  update?: ChecklistUpdateWithoutTrainingsInput | undefined;
}
