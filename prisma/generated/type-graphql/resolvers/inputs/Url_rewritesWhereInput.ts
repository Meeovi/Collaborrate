import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Url_rewritesWhereInput", {
  isAbstract: true
})
export class Url_rewritesWhereInput {
  @TypeGraphQL.Field(_type => [Url_rewritesWhereInput], {
    nullable: true
  })
  AND?: Url_rewritesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesWhereInput], {
    nullable: true
  })
  OR?: Url_rewritesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesWhereInput], {
    nullable: true
  })
  NOT?: Url_rewritesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  request_path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  redirect_type?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  target_path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  store?: StringNullableFilter | undefined;
}
