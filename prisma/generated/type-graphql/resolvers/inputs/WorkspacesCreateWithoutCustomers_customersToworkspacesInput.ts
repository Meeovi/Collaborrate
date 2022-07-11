import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateNestedOneWithoutWorkspacesInput } from "../inputs/BrandsCreateNestedOneWithoutWorkspacesInput";
import { CategoriesCreateNestedOneWithoutWorkspacesInput } from "../inputs/CategoriesCreateNestedOneWithoutWorkspacesInput";
import { ProductsCreateNestedOneWithoutWorkspacesInput } from "../inputs/ProductsCreateNestedOneWithoutWorkspacesInput";
import { ProjectsCreateNestedOneWithoutWorkspacesInput } from "../inputs/ProjectsCreateNestedOneWithoutWorkspacesInput";
import { ShopsCreateNestedOneWithoutWorkspacesInput } from "../inputs/ShopsCreateNestedOneWithoutWorkspacesInput";
import { TasksCreateNestedOneWithoutWorkspacesInput } from "../inputs/TasksCreateNestedOneWithoutWorkspacesInput";
import { UsersCreateNestedOneWithoutWorkspacesInput } from "../inputs/UsersCreateNestedOneWithoutWorkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateWithoutCustomers_customersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateWithoutCustomers_customersToworkspacesInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateNestedOneWithoutWorkspacesInput, {
    nullable: true
  })
  brands_brandsToworkspaces?: BrandsCreateNestedOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesCreateNestedOneWithoutWorkspacesInput, {
    nullable: true
  })
  categories?: CategoriesCreateNestedOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutWorkspacesInput, {
    nullable: true
  })
  products_productsToworkspaces?: ProductsCreateNestedOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateNestedOneWithoutWorkspacesInput, {
    nullable: true
  })
  projects_projectsToworkspaces?: ProjectsCreateNestedOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ShopsCreateNestedOneWithoutWorkspacesInput, {
    nullable: true
  })
  shops_shopsToworkspaces?: ShopsCreateNestedOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutWorkspacesInput, {
    nullable: true
  })
  tasks_tasksToworkspaces?: TasksCreateNestedOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutWorkspacesInput, {
    nullable: true
  })
  users_usersToworkspaces?: UsersCreateNestedOneWithoutWorkspacesInput | undefined;
}