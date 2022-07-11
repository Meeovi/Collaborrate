import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateManyProducts_productsTotrainingsInput";

@TypeGraphQL.InputType("TrainingsCreateManyProducts_productsTotrainingsInputEnvelope", {
  isAbstract: true
})
export class TrainingsCreateManyProducts_productsTotrainingsInputEnvelope {
  @TypeGraphQL.Field(_type => [TrainingsCreateManyProducts_productsTotrainingsInput], {
    nullable: false
  })
  data!: TrainingsCreateManyProducts_productsTotrainingsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
