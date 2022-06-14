import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedJsonNullableFilter } from "../inputs/NestedJsonNullableFilter";

@TypeGraphQL.InputType("JsonNullableWithAggregatesFilter", {
  isAbstract: true
})
export class JsonNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  equals?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  not?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedJsonNullableFilter, {
    nullable: true
  })
  _min?: NestedJsonNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedJsonNullableFilter, {
    nullable: true
  })
  _max?: NestedJsonNullableFilter | undefined;
}
