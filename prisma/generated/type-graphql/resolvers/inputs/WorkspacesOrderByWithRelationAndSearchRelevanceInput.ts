import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/BrandsOrderByWithRelationAndSearchRelevanceInput";
import { CategoriesOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CategoriesOrderByWithRelationAndSearchRelevanceInput";
import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { ProductsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductsOrderByWithRelationAndSearchRelevanceInput";
import { ProjectsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProjectsOrderByWithRelationAndSearchRelevanceInput";
import { ShopsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ShopsOrderByWithRelationAndSearchRelevanceInput";
import { TasksOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TasksOrderByWithRelationAndSearchRelevanceInput";
import { UsersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UsersOrderByWithRelationAndSearchRelevanceInput";
import { WorkspacesOrderByRelevanceInput } from "../inputs/WorkspacesOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WorkspacesOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class WorkspacesOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => BrandsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  brands_brandsToworkspaces?: BrandsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  categories?: CategoriesOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customers_customersToworkspaces?: CustomersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  products_productsToworkspaces?: ProductsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  projects_projectsToworkspaces?: ProjectsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ShopsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  shops_shopsToworkspaces?: ShopsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TasksOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tasks_tasksToworkspaces?: TasksOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UsersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  users_usersToworkspaces?: UsersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: WorkspacesOrderByRelevanceInput | undefined;
}
