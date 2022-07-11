import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesAvgAggregate } from "../outputs/CountriesAvgAggregate";
import { CountriesCountAggregate } from "../outputs/CountriesCountAggregate";
import { CountriesMaxAggregate } from "../outputs/CountriesMaxAggregate";
import { CountriesMinAggregate } from "../outputs/CountriesMinAggregate";
import { CountriesSumAggregate } from "../outputs/CountriesSumAggregate";

@TypeGraphQL.ObjectType("CountriesGroupBy", {
  isAbstract: true
})
export class CountriesGroupBy {
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
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region!: string | null;

  @TypeGraphQL.Field(_type => CountriesCountAggregate, {
    nullable: true
  })
  _count!: CountriesCountAggregate | null;

  @TypeGraphQL.Field(_type => CountriesAvgAggregate, {
    nullable: true
  })
  _avg!: CountriesAvgAggregate | null;

  @TypeGraphQL.Field(_type => CountriesSumAggregate, {
    nullable: true
  })
  _sum!: CountriesSumAggregate | null;

  @TypeGraphQL.Field(_type => CountriesMinAggregate, {
    nullable: true
  })
  _min!: CountriesMinAggregate | null;

  @TypeGraphQL.Field(_type => CountriesMaxAggregate, {
    nullable: true
  })
  _max!: CountriesMaxAggregate | null;
}
