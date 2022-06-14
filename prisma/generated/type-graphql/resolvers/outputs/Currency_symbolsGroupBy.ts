import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_symbolsCountAggregate } from "../outputs/Currency_symbolsCountAggregate";
import { Currency_symbolsMaxAggregate } from "../outputs/Currency_symbolsMaxAggregate";
import { Currency_symbolsMinAggregate } from "../outputs/Currency_symbolsMinAggregate";

@TypeGraphQL.ObjectType("Currency_symbolsGroupBy", {
  isAbstract: true
})
export class Currency_symbolsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  symbol!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  use_standard!: boolean | null;

  @TypeGraphQL.Field(_type => Currency_symbolsCountAggregate, {
    nullable: true
  })
  _count!: Currency_symbolsCountAggregate | null;

  @TypeGraphQL.Field(_type => Currency_symbolsMinAggregate, {
    nullable: true
  })
  _min!: Currency_symbolsMinAggregate | null;

  @TypeGraphQL.Field(_type => Currency_symbolsMaxAggregate, {
    nullable: true
  })
  _max!: Currency_symbolsMaxAggregate | null;
}
