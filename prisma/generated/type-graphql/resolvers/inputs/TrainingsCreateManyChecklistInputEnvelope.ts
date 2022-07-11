import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyChecklistInput } from "../inputs/TrainingsCreateManyChecklistInput";

@TypeGraphQL.InputType("TrainingsCreateManyChecklistInputEnvelope", {
  isAbstract: true
})
export class TrainingsCreateManyChecklistInputEnvelope {
  @TypeGraphQL.Field(_type => [TrainingsCreateManyChecklistInput], {
    nullable: false
  })
  data!: TrainingsCreateManyChecklistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
