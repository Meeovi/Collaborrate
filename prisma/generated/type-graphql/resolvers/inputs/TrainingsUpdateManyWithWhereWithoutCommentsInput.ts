import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsScalarWhereInput } from "../inputs/TrainingsScalarWhereInput";
import { TrainingsUpdateManyMutationInput } from "../inputs/TrainingsUpdateManyMutationInput";

@TypeGraphQL.InputType("TrainingsUpdateManyWithWhereWithoutCommentsInput", {
  isAbstract: true
})
export class TrainingsUpdateManyWithWhereWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TrainingsScalarWhereInput, {
    nullable: false
  })
  where!: TrainingsScalarWhereInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrainingsUpdateManyMutationInput;
}
