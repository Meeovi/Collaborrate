import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_roles__RoleCountAggregate } from "../outputs/Join_roles__RoleCountAggregate";
import { Join_roles__RoleMaxAggregate } from "../outputs/Join_roles__RoleMaxAggregate";
import { Join_roles__RoleMinAggregate } from "../outputs/Join_roles__RoleMinAggregate";

@TypeGraphQL.ObjectType("AggregateJoin_roles__Role", {
  isAbstract: true
})
export class AggregateJoin_roles__Role {
  @TypeGraphQL.Field(_type => Join_roles__RoleCountAggregate, {
    nullable: true
  })
  _count!: Join_roles__RoleCountAggregate | null;

  @TypeGraphQL.Field(_type => Join_roles__RoleMinAggregate, {
    nullable: true
  })
  _min!: Join_roles__RoleMinAggregate | null;

  @TypeGraphQL.Field(_type => Join_roles__RoleMaxAggregate, {
    nullable: true
  })
  _max!: Join_roles__RoleMaxAggregate | null;
}
