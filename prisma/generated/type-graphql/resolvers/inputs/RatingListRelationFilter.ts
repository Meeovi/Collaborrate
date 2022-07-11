import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingWhereInput } from "../inputs/RatingWhereInput";

@TypeGraphQL.InputType("RatingListRelationFilter", {
  isAbstract: true
})
export class RatingListRelationFilter {
  @TypeGraphQL.Field(_type => RatingWhereInput, {
    nullable: true
  })
  every?: RatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => RatingWhereInput, {
    nullable: true
  })
  some?: RatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => RatingWhereInput, {
    nullable: true
  })
  none?: RatingWhereInput | undefined;
}
