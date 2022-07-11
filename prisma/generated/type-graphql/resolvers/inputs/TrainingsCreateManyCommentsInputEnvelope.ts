import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyCommentsInput } from "../inputs/TrainingsCreateManyCommentsInput";

@TypeGraphQL.InputType("TrainingsCreateManyCommentsInputEnvelope", {
  isAbstract: true
})
export class TrainingsCreateManyCommentsInputEnvelope {
  @TypeGraphQL.Field(_type => [TrainingsCreateManyCommentsInput], {
    nullable: false
  })
  data!: TrainingsCreateManyCommentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
