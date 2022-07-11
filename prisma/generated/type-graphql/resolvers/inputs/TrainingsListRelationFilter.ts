import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsWhereInput } from "../inputs/TrainingsWhereInput";

@TypeGraphQL.InputType("TrainingsListRelationFilter", {
  isAbstract: true
})
export class TrainingsListRelationFilter {
  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  every?: TrainingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  some?: TrainingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  none?: TrainingsWhereInput | undefined;
}
