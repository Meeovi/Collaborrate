import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SCHEMAWhereInput", {
  isAbstract: true
})
export class SCHEMAWhereInput {
  @TypeGraphQL.Field(_type => [SCHEMAWhereInput], {
    nullable: true
  })
  AND?: SCHEMAWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAWhereInput], {
    nullable: true
  })
  OR?: SCHEMAWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAWhereInput], {
    nullable: true
  })
  NOT?: SCHEMAWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  className?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  schema?: JsonNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isParseClass?: BoolNullableFilter | undefined;
}
