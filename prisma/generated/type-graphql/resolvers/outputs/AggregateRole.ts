import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCountAggregate } from "../outputs/RoleCountAggregate";
import { RoleMaxAggregate } from "../outputs/RoleMaxAggregate";
import { RoleMinAggregate } from "../outputs/RoleMinAggregate";

@TypeGraphQL.ObjectType("AggregateRole", {
  isAbstract: true
})
export class AggregateRole {
  @TypeGraphQL.Field(_type => RoleCountAggregate, {
    nullable: true
  })
  _count!: RoleCountAggregate | null;

  @TypeGraphQL.Field(_type => RoleMinAggregate, {
    nullable: true
  })
  _min!: RoleMinAggregate | null;

  @TypeGraphQL.Field(_type => RoleMaxAggregate, {
    nullable: true
  })
  _max!: RoleMaxAggregate | null;
}
