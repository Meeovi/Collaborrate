import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_users__RoleCountAggregate } from "../outputs/Join_users__RoleCountAggregate";
import { Join_users__RoleMaxAggregate } from "../outputs/Join_users__RoleMaxAggregate";
import { Join_users__RoleMinAggregate } from "../outputs/Join_users__RoleMinAggregate";

@TypeGraphQL.ObjectType("Join_users__RoleGroupBy", {
  isAbstract: true
})
export class Join_users__RoleGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  relatedId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owningId!: string;

  @TypeGraphQL.Field(_type => Join_users__RoleCountAggregate, {
    nullable: true
  })
  _count!: Join_users__RoleCountAggregate | null;

  @TypeGraphQL.Field(_type => Join_users__RoleMinAggregate, {
    nullable: true
  })
  _min!: Join_users__RoleMinAggregate | null;

  @TypeGraphQL.Field(_type => Join_users__RoleMaxAggregate, {
    nullable: true
  })
  _max!: Join_users__RoleMaxAggregate | null;
}
