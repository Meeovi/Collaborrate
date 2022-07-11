import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesCreateOrConnectWithoutTrainingsInput } from "../inputs/CountriesCreateOrConnectWithoutTrainingsInput";
import { CountriesCreateWithoutTrainingsInput } from "../inputs/CountriesCreateWithoutTrainingsInput";
import { CountriesUpdateWithoutTrainingsInput } from "../inputs/CountriesUpdateWithoutTrainingsInput";
import { CountriesUpsertWithoutTrainingsInput } from "../inputs/CountriesUpsertWithoutTrainingsInput";
import { CountriesWhereUniqueInput } from "../inputs/CountriesWhereUniqueInput";

@TypeGraphQL.InputType("CountriesUpdateOneWithoutTrainingsNestedInput", {
  isAbstract: true
})
export class CountriesUpdateOneWithoutTrainingsNestedInput {
  @TypeGraphQL.Field(_type => CountriesCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: CountriesCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CountriesCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: CountriesCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CountriesUpsertWithoutTrainingsInput, {
    nullable: true
  })
  upsert?: CountriesUpsertWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CountriesWhereUniqueInput, {
    nullable: true
  })
  connect?: CountriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountriesUpdateWithoutTrainingsInput, {
    nullable: true
  })
  update?: CountriesUpdateWithoutTrainingsInput | undefined;
}
