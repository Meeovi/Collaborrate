import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Core_storeWhereInput", {
  isAbstract: true
})
export class Core_storeWhereInput {
  @TypeGraphQL.Field(_type => [Core_storeWhereInput], {
    nullable: true
  })
  AND?: Core_storeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Core_storeWhereInput], {
    nullable: true
  })
  OR?: Core_storeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Core_storeWhereInput], {
    nullable: true
  })
  NOT?: Core_storeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  key?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  environment?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tag?: StringNullableFilter | undefined;
}
