import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesCreateOrConnectWithoutTrainingsInput } from "../inputs/StatesCreateOrConnectWithoutTrainingsInput";
import { StatesCreateWithoutTrainingsInput } from "../inputs/StatesCreateWithoutTrainingsInput";
import { StatesWhereUniqueInput } from "../inputs/StatesWhereUniqueInput";

@TypeGraphQL.InputType("StatesCreateNestedOneWithoutTrainingsInput", {
  isAbstract: true
})
export class StatesCreateNestedOneWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => StatesCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: StatesCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => StatesCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: StatesCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: true
  })
  connect?: StatesWhereUniqueInput | undefined;
}
