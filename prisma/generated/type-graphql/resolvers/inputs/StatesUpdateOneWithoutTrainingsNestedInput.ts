import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesCreateOrConnectWithoutTrainingsInput } from "../inputs/StatesCreateOrConnectWithoutTrainingsInput";
import { StatesCreateWithoutTrainingsInput } from "../inputs/StatesCreateWithoutTrainingsInput";
import { StatesUpdateWithoutTrainingsInput } from "../inputs/StatesUpdateWithoutTrainingsInput";
import { StatesUpsertWithoutTrainingsInput } from "../inputs/StatesUpsertWithoutTrainingsInput";
import { StatesWhereUniqueInput } from "../inputs/StatesWhereUniqueInput";

@TypeGraphQL.InputType("StatesUpdateOneWithoutTrainingsNestedInput", {
  isAbstract: true
})
export class StatesUpdateOneWithoutTrainingsNestedInput {
  @TypeGraphQL.Field(_type => StatesCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: StatesCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => StatesCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: StatesCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => StatesUpsertWithoutTrainingsInput, {
    nullable: true
  })
  upsert?: StatesUpsertWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: true
  })
  connect?: StatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatesUpdateWithoutTrainingsInput, {
    nullable: true
  })
  update?: StatesUpdateWithoutTrainingsInput | undefined;
}
