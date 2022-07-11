import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_ratesAvgAggregate } from "../outputs/Currency_ratesAvgAggregate";
import { Currency_ratesCountAggregate } from "../outputs/Currency_ratesCountAggregate";
import { Currency_ratesMaxAggregate } from "../outputs/Currency_ratesMaxAggregate";
import { Currency_ratesMinAggregate } from "../outputs/Currency_ratesMinAggregate";
import { Currency_ratesSumAggregate } from "../outputs/Currency_ratesSumAggregate";

@TypeGraphQL.ObjectType("Currency_ratesGroupBy", {
  isAbstract: true
})
export class Currency_ratesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  import_service!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  usd!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => Currency_ratesCountAggregate, {
    nullable: true
  })
  _count!: Currency_ratesCountAggregate | null;

  @TypeGraphQL.Field(_type => Currency_ratesAvgAggregate, {
    nullable: true
  })
  _avg!: Currency_ratesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Currency_ratesSumAggregate, {
    nullable: true
  })
  _sum!: Currency_ratesSumAggregate | null;

  @TypeGraphQL.Field(_type => Currency_ratesMinAggregate, {
    nullable: true
  })
  _min!: Currency_ratesMinAggregate | null;

  @TypeGraphQL.Field(_type => Currency_ratesMaxAggregate, {
    nullable: true
  })
  _max!: Currency_ratesMaxAggregate | null;
}
