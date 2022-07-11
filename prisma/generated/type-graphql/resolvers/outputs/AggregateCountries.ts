import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesAvgAggregate } from "../outputs/CountriesAvgAggregate";
import { CountriesCountAggregate } from "../outputs/CountriesCountAggregate";
import { CountriesMaxAggregate } from "../outputs/CountriesMaxAggregate";
import { CountriesMinAggregate } from "../outputs/CountriesMinAggregate";
import { CountriesSumAggregate } from "../outputs/CountriesSumAggregate";

@TypeGraphQL.ObjectType("AggregateCountries", {
  isAbstract: true
})
export class AggregateCountries {
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
