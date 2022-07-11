import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GraphQLConfigCountAggregate } from "../outputs/GraphQLConfigCountAggregate";
import { GraphQLConfigMaxAggregate } from "../outputs/GraphQLConfigMaxAggregate";
import { GraphQLConfigMinAggregate } from "../outputs/GraphQLConfigMinAggregate";

@TypeGraphQL.ObjectType("GraphQLConfigGroupBy", {
  isAbstract: true
})
export class GraphQLConfigGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  config!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLConfigCountAggregate, {
    nullable: true
  })
  _count!: GraphQLConfigCountAggregate | null;

  @TypeGraphQL.Field(_type => GraphQLConfigMinAggregate, {
    nullable: true
  })
  _min!: GraphQLConfigMinAggregate | null;

  @TypeGraphQL.Field(_type => GraphQLConfigMaxAggregate, {
    nullable: true
  })
  _max!: GraphQLConfigMaxAggregate | null;
}
