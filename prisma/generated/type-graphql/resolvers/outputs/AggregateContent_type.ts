import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Content_typeAvgAggregate } from "../outputs/Content_typeAvgAggregate";
import { Content_typeCountAggregate } from "../outputs/Content_typeCountAggregate";
import { Content_typeMaxAggregate } from "../outputs/Content_typeMaxAggregate";
import { Content_typeMinAggregate } from "../outputs/Content_typeMinAggregate";
import { Content_typeSumAggregate } from "../outputs/Content_typeSumAggregate";

@TypeGraphQL.ObjectType("AggregateContent_type", {
  isAbstract: true
})
export class AggregateContent_type {
  @TypeGraphQL.Field(_type => Content_typeCountAggregate, {
    nullable: true
  })
  _count!: Content_typeCountAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeAvgAggregate, {
    nullable: true
  })
  _avg!: Content_typeAvgAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeSumAggregate, {
    nullable: true
  })
  _sum!: Content_typeSumAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeMinAggregate, {
    nullable: true
  })
  _min!: Content_typeMinAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeMaxAggregate, {
    nullable: true
  })
  _max!: Content_typeMaxAggregate | null;
}
