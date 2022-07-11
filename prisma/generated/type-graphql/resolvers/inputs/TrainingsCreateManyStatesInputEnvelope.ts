import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyStatesInput } from "../inputs/TrainingsCreateManyStatesInput";

@TypeGraphQL.InputType("TrainingsCreateManyStatesInputEnvelope", {
  isAbstract: true
})
export class TrainingsCreateManyStatesInputEnvelope {
  @TypeGraphQL.Field(_type => [TrainingsCreateManyStatesInput], {
    nullable: false
  })
  data!: TrainingsCreateManyStatesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
