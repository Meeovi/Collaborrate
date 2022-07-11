import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BrandsRelationFilter } from "../inputs/BrandsRelationFilter";
import { CategoriesRelationFilter } from "../inputs/CategoriesRelationFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { ProjectsRelationFilter } from "../inputs/ProjectsRelationFilter";
import { ShopsRelationFilter } from "../inputs/ShopsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TasksRelationFilter } from "../inputs/TasksRelationFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("WorkspacesWhereInput", {
  isAbstract: true
})
export class WorkspacesWhereInput {
  @TypeGraphQL.Field(_type => [WorkspacesWhereInput], {
    nullable: true
  })
  AND?: WorkspacesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereInput], {
    nullable: true
  })
  OR?: WorkspacesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereInput], {
    nullable: true
  })
  NOT?: WorkspacesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customers?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  users?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  products?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  tasks?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  brands?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  shops?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  category?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isPublic?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  projects?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  author?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  media?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BrandsRelationFilter, {
    nullable: true
  })
  brands_brandsToworkspaces?: BrandsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoriesRelationFilter, {
    nullable: true
  })
  categories?: CategoriesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomersRelationFilter, {
    nullable: true
  })
  customers_customersToworkspaces?: CustomersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  products_productsToworkspaces?: ProductsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectsRelationFilter, {
    nullable: true
  })
  projects_projectsToworkspaces?: ProjectsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShopsRelationFilter, {
    nullable: true
  })
  shops_shopsToworkspaces?: ShopsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TasksRelationFilter, {
    nullable: true
  })
  tasks_tasksToworkspaces?: TasksRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  users_usersToworkspaces?: UsersRelationFilter | undefined;
}
