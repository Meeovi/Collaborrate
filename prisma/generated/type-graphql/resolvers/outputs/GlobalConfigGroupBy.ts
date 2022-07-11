import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GlobalConfigCountAggregate } from "../outputs/GlobalConfigCountAggregate";
import { GlobalConfigMaxAggregate } from "../outputs/GlobalConfigMaxAggregate";
import { GlobalConfigMinAggregate } from "../outputs/GlobalConfigMinAggregate";

@TypeGraphQL.ObjectType("GlobalConfigGroupBy", {
  isAbstract: true
})
export class GlobalConfigGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  params!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  masterKeyOnly!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GlobalConfigCountAggregate, {
    nullable: true
  })
  _count!: GlobalConfigCountAggregate | null;

  @TypeGraphQL.Field(_type => GlobalConfigMinAggregate, {
    nullable: true
  })
  _min!: GlobalConfigMinAggregate | null;

  @TypeGraphQL.Field(_type => GlobalConfigMaxAggregate, {
    nullable: true
  })
  _max!: GlobalConfigMaxAggregate | null;
}
