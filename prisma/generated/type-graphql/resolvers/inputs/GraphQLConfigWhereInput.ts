import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GraphQLConfigWhereInput", {
  isAbstract: true
})
export class GraphQLConfigWhereInput {
  @TypeGraphQL.Field(_type => [GraphQLConfigWhereInput], {
    nullable: true
  })
  AND?: GraphQLConfigWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigWhereInput], {
    nullable: true
  })
  OR?: GraphQLConfigWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigWhereInput], {
    nullable: true
  })
  NOT?: GraphQLConfigWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  objectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  config?: JsonNullableFilter | undefined;
}
