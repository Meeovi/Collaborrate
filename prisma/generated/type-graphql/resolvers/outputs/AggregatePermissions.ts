import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionsAvgAggregate } from "../outputs/PermissionsAvgAggregate";
import { PermissionsCountAggregate } from "../outputs/PermissionsCountAggregate";
import { PermissionsMaxAggregate } from "../outputs/PermissionsMaxAggregate";
import { PermissionsMinAggregate } from "../outputs/PermissionsMinAggregate";
import { PermissionsSumAggregate } from "../outputs/PermissionsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePermissions", {
  isAbstract: true
})
export class AggregatePermissions {
  @TypeGraphQL.Field(_type => PermissionsCountAggregate, {
    nullable: true
  })
  _count!: PermissionsCountAggregate | null;

  @TypeGraphQL.Field(_type => PermissionsAvgAggregate, {
    nullable: true
  })
  _avg!: PermissionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PermissionsSumAggregate, {
    nullable: true
  })
  _sum!: PermissionsSumAggregate | null;

  @TypeGraphQL.Field(_type => PermissionsMinAggregate, {
    nullable: true
  })
  _min!: PermissionsMinAggregate | null;

  @TypeGraphQL.Field(_type => PermissionsMaxAggregate, {
    nullable: true
  })
  _max!: PermissionsMaxAggregate | null;
}