import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RolesWhereInput", {
  isAbstract: true
})
export class RolesWhereInput {
  @TypeGraphQL.Field(_type => [RolesWhereInput], {
    nullable: true
  })
  AND?: RolesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesWhereInput], {
    nullable: true
  })
  OR?: RolesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesWhereInput], {
    nullable: true
  })
  NOT?: RolesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  role_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;
}
