import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrenciesAvgAggregate } from "../outputs/CurrenciesAvgAggregate";
import { CurrenciesCountAggregate } from "../outputs/CurrenciesCountAggregate";
import { CurrenciesMaxAggregate } from "../outputs/CurrenciesMaxAggregate";
import { CurrenciesMinAggregate } from "../outputs/CurrenciesMinAggregate";
import { CurrenciesSumAggregate } from "../outputs/CurrenciesSumAggregate";

@TypeGraphQL.ObjectType("AggregateCurrencies", {
  isAbstract: true
})
export class AggregateCurrencies {
  @TypeGraphQL.Field(_type => CurrenciesCountAggregate, {
    nullable: true
  })
  _count!: CurrenciesCountAggregate | null;

  @TypeGraphQL.Field(_type => CurrenciesAvgAggregate, {
    nullable: true
  })
  _avg!: CurrenciesAvgAggregate | null;

  @TypeGraphQL.Field(_type => CurrenciesSumAggregate, {
    nullable: true
  })
  _sum!: CurrenciesSumAggregate | null;

  @TypeGraphQL.Field(_type => CurrenciesMinAggregate, {
    nullable: true
  })
  _min!: CurrenciesMinAggregate | null;

  @TypeGraphQL.Field(_type => CurrenciesMaxAggregate, {
    nullable: true
  })
  _max!: CurrenciesMaxAggregate | null;
}
