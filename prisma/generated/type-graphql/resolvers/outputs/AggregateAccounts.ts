import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountsAvgAggregate } from "../outputs/AccountsAvgAggregate";
import { AccountsCountAggregate } from "../outputs/AccountsCountAggregate";
import { AccountsMaxAggregate } from "../outputs/AccountsMaxAggregate";
import { AccountsMinAggregate } from "../outputs/AccountsMinAggregate";
import { AccountsSumAggregate } from "../outputs/AccountsSumAggregate";

@TypeGraphQL.ObjectType("AggregateAccounts", {
  isAbstract: true
})
export class AggregateAccounts {
  @TypeGraphQL.Field(_type => AccountsCountAggregate, {
    nullable: true
  })
  _count!: AccountsCountAggregate | null;

  @TypeGraphQL.Field(_type => AccountsAvgAggregate, {
    nullable: true
  })
  _avg!: AccountsAvgAggregate | null;

  @TypeGraphQL.Field(_type => AccountsSumAggregate, {
    nullable: true
  })
  _sum!: AccountsSumAggregate | null;

  @TypeGraphQL.Field(_type => AccountsMinAggregate, {
    nullable: true
  })
  _min!: AccountsMinAggregate | null;

  @TypeGraphQL.Field(_type => AccountsMaxAggregate, {
    nullable: true
  })
  _max!: AccountsMaxAggregate | null;
}
