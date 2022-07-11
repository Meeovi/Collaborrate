import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesAvgAggregate } from "../outputs/StatesAvgAggregate";
import { StatesCountAggregate } from "../outputs/StatesCountAggregate";
import { StatesMaxAggregate } from "../outputs/StatesMaxAggregate";
import { StatesMinAggregate } from "../outputs/StatesMinAggregate";
import { StatesSumAggregate } from "../outputs/StatesSumAggregate";

@TypeGraphQL.ObjectType("StatesGroupBy", {
  isAbstract: true
})
export class StatesGroupBy {
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
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => StatesCountAggregate, {
    nullable: true
  })
  _count!: StatesCountAggregate | null;

  @TypeGraphQL.Field(_type => StatesAvgAggregate, {
    nullable: true
  })
  _avg!: StatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => StatesSumAggregate, {
    nullable: true
  })
  _sum!: StatesSumAggregate | null;

  @TypeGraphQL.Field(_type => StatesMinAggregate, {
    nullable: true
  })
  _min!: StatesMinAggregate | null;

  @TypeGraphQL.Field(_type => StatesMaxAggregate, {
    nullable: true
  })
  _max!: StatesMaxAggregate | null;
}
