import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Trainings } from "../models/Trainings";
import { CountriesCount } from "../resolvers/outputs/CountriesCount";

@TypeGraphQL.ObjectType("Countries", {
  isAbstract: true
})
export class Countries {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region?: string | null;

  trainings?: Trainings[];

  @TypeGraphQL.Field(_type => CountriesCount, {
    nullable: true
  })
  _count?: CountriesCount | null;
}
