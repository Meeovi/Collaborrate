import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateNestedOneWithoutMediamanagerInput } from "../inputs/BrandsCreateNestedOneWithoutMediamanagerInput";
import { CommentsCreateNestedOneWithoutMediamanagerInput } from "../inputs/CommentsCreateNestedOneWithoutMediamanagerInput";
import { CustomersCreateNestedOneWithoutMediamanagerInput } from "../inputs/CustomersCreateNestedOneWithoutMediamanagerInput";
import { ProductsCreateNestedOneWithoutMediamanagerInput } from "../inputs/ProductsCreateNestedOneWithoutMediamanagerInput";
import { TasksCreateNestedOneWithoutMediamanagerInput } from "../inputs/TasksCreateNestedOneWithoutMediamanagerInput";
import { UsersCreateNestedOneWithoutMediamanagerInput } from "../inputs/UsersCreateNestedOneWithoutMediamanagerInput";

@TypeGraphQL.InputType("MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keywords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expiration_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  versions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  albums?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  workspace?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_type?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutMediamanagerInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateNestedOneWithoutMediamanagerInput, {
    nullable: true
  })
  brands_brandsTomediamanager?: BrandsCreateNestedOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateNestedOneWithoutMediamanagerInput, {
    nullable: true
  })
  comments?: CommentsCreateNestedOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutMediamanagerInput, {
    nullable: true
  })
  users?: UsersCreateNestedOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutMediamanagerInput, {
    nullable: true
  })
  products_mediamanagerToproducts?: ProductsCreateNestedOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutMediamanagerInput, {
    nullable: true
  })
  tasks?: TasksCreateNestedOneWithoutMediamanagerInput | undefined;
}
