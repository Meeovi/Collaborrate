import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollsAvgAggregate } from "../outputs/PollsAvgAggregate";
import { PollsCountAggregate } from "../outputs/PollsCountAggregate";
import { PollsMaxAggregate } from "../outputs/PollsMaxAggregate";
import { PollsMinAggregate } from "../outputs/PollsMinAggregate";
import { PollsSumAggregate } from "../outputs/PollsSumAggregate";

@TypeGraphQL.ObjectType("PollsGroupBy", {
  isAbstract: true
})
export class PollsGroupBy {
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
  excerpt!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  question!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  response!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users!: string | null;

  @TypeGraphQL.Field(_type => PollsCountAggregate, {
    nullable: true
  })
  _count!: PollsCountAggregate | null;

  @TypeGraphQL.Field(_type => PollsAvgAggregate, {
    nullable: true
  })
  _avg!: PollsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PollsSumAggregate, {
    nullable: true
  })
  _sum!: PollsSumAggregate | null;

  @TypeGraphQL.Field(_type => PollsMinAggregate, {
    nullable: true
  })
  _min!: PollsMinAggregate | null;

  @TypeGraphQL.Field(_type => PollsMaxAggregate, {
    nullable: true
  })
  _max!: PollsMaxAggregate | null;
}
