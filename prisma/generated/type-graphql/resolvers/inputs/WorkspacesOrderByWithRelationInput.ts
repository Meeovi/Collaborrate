import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsOrderByWithRelationInput } from "../inputs/BrandsOrderByWithRelationInput";
import { CategoriesOrderByWithRelationInput } from "../inputs/CategoriesOrderByWithRelationInput";
import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
import { ProjectsOrderByWithRelationInput } from "../inputs/ProjectsOrderByWithRelationInput";
import { ShopsOrderByWithRelationInput } from "../inputs/ShopsOrderByWithRelationInput";
import { TasksOrderByWithRelationInput } from "../inputs/TasksOrderByWithRelationInput";
import { UsersOrderByWithRelationInput } from "../inputs/UsersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WorkspacesOrderByWithRelationInput", {
  isAbstract: true
})
export class WorkspacesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  users?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tasks?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  brands?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shops?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projects?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BrandsOrderByWithRelationInput, {
    nullable: true
  })
  brands_brandsToworkspaces?: BrandsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOrderByWithRelationInput, {
    nullable: true
  })
  categories?: CategoriesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput, {
    nullable: true
  })
  customers_customersToworkspaces?: CustomersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput, {
    nullable: true
  })
  products_productsToworkspaces?: ProductsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOrderByWithRelationInput, {
    nullable: true
  })
  projects_projectsToworkspaces?: ProjectsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ShopsOrderByWithRelationInput, {
    nullable: true
  })
  shops_shopsToworkspaces?: ShopsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TasksOrderByWithRelationInput, {
    nullable: true
  })
  tasks_tasksToworkspaces?: TasksOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UsersOrderByWithRelationInput, {
    nullable: true
  })
  users_usersToworkspaces?: UsersOrderByWithRelationInput | undefined;
}
