import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyCountriesInput } from "../inputs/TrainingsCreateManyCountriesInput";

@TypeGraphQL.InputType("TrainingsCreateManyCountriesInputEnvelope", {
  isAbstract: true
})
export class TrainingsCreateManyCountriesInputEnvelope {
  @TypeGraphQL.Field(_type => [TrainingsCreateManyCountriesInput], {
    nullable: false
  })
  data!: TrainingsCreateManyCountriesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
