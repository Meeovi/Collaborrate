import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateManyProductsInput } from "../inputs/RatingCreateManyProductsInput";

@TypeGraphQL.InputType("RatingCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class RatingCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [RatingCreateManyProductsInput], {
    nullable: false
  })
  data!: RatingCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
