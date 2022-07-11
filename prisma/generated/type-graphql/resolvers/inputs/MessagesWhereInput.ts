import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("MessagesWhereInput", {
  isAbstract: true
})
export class MessagesWhereInput {
  @TypeGraphQL.Field(_type => [MessagesWhereInput], {
    nullable: true
  })
  AND?: MessagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereInput], {
    nullable: true
  })
  OR?: MessagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereInput], {
    nullable: true
  })
  NOT?: MessagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  from?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  subject?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  sender?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cust_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  media?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  staff_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomersRelationFilter, {
    nullable: true
  })
  customers?: CustomersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  users?: UsersRelationFilter | undefined;
}
