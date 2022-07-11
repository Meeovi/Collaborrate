import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesCreateWithoutTrainingsInput } from "../inputs/StatesCreateWithoutTrainingsInput";
import { StatesWhereUniqueInput } from "../inputs/StatesWhereUniqueInput";

@TypeGraphQL.InputType("StatesCreateOrConnectWithoutTrainingsInput", {
  isAbstract: true
})
export class StatesCreateOrConnectWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: false
  })
  where!: StatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatesCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: StatesCreateWithoutTrainingsInput;
}
