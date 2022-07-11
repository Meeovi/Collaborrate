import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsRelationFilter } from "../inputs/AgreementsRelationFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { BrandsRelationFilter } from "../inputs/BrandsRelationFilter";
import { CommentsRelationFilter } from "../inputs/CommentsRelationFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TasksRelationFilter } from "../inputs/TasksRelationFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("MediamanagerWhereInput", {
  isAbstract: true
})
export class MediamanagerWhereInput {
  @TypeGraphQL.Field(_type => [MediamanagerWhereInput], {
    nullable: true
  })
  AND?: MediamanagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereInput], {
    nullable: true
  })
  OR?: MediamanagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereInput], {
    nullable: true
  })
  NOT?: MediamanagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  media?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  keywords?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tags?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  brands?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  expiration_date?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  copyright?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  dimensions?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  author?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  versions?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  watermark_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  watermark_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  watermark_media?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  agreements?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  albums?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  comment?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  workspace?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  task_name?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  task_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  task_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  members?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  products?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AgreementsRelationFilter, {
    nullable: true
  })
  agreements_agreementsTomediamanager?: AgreementsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomersRelationFilter, {
    nullable: true
  })
  customers?: CustomersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BrandsRelationFilter, {
    nullable: true
  })
  brands_brandsTomediamanager?: BrandsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsRelationFilter, {
    nullable: true
  })
  comments?: CommentsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  users?: UsersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  products_mediamanagerToproducts?: ProductsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TasksRelationFilter, {
    nullable: true
  })
  tasks?: TasksRelationFilter | undefined;
}
