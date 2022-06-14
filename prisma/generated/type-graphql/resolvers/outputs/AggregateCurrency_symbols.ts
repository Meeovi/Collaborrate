import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_symbolsCountAggregate } from "../outputs/Currency_symbolsCountAggregate";
import { Currency_symbolsMaxAggregate } from "../outputs/Currency_symbolsMaxAggregate";
import { Currency_symbolsMinAggregate } from "../outputs/Currency_symbolsMinAggregate";

@TypeGraphQL.ObjectType("AggregateCurrency_symbols", {
  isAbstract: true
})
export class AggregateCurrency_symbols {
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
