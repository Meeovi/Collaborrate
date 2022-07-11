import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { BrandsUpdateOneWithoutWorkspacesNestedInput } from "../inputs/BrandsUpdateOneWithoutWorkspacesNestedInput";
import { CategoriesUpdateOneWithoutWorkspacesNestedInput } from "../inputs/CategoriesUpdateOneWithoutWorkspacesNestedInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneWithoutWorkspacesNestedInput } from "../inputs/ProductsUpdateOneWithoutWorkspacesNestedInput";
import { ProjectsUpdateOneWithoutWorkspacesNestedInput } from "../inputs/ProjectsUpdateOneWithoutWorkspacesNestedInput";
import { ShopsUpdateOneWithoutWorkspacesNestedInput } from "../inputs/ShopsUpdateOneWithoutWorkspacesNestedInput";
import { TasksUpdateOneWithoutWorkspacesNestedInput } from "../inputs/TasksUpdateOneWithoutWorkspacesNestedInput";
import { UsersUpdateOneWithoutWorkspacesNestedInput } from "../inputs/UsersUpdateOneWithoutWorkspacesNestedInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithoutCustomers_customersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithoutCustomers_customersToworkspacesInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isPublic?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  author?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  media?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpdateOneWithoutWorkspacesNestedInput, {
    nullable: true
  })
  brands_brandsToworkspaces?: BrandsUpdateOneWithoutWorkspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesUpdateOneWithoutWorkspacesNestedInput, {
    nullable: true
  })
  categories?: CategoriesUpdateOneWithoutWorkspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutWorkspacesNestedInput, {
    nullable: true
  })
  products_productsToworkspaces?: ProductsUpdateOneWithoutWorkspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpdateOneWithoutWorkspacesNestedInput, {
    nullable: true
  })
  projects_projectsToworkspaces?: ProjectsUpdateOneWithoutWorkspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ShopsUpdateOneWithoutWorkspacesNestedInput, {
    nullable: true
  })
  shops_shopsToworkspaces?: ShopsUpdateOneWithoutWorkspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneWithoutWorkspacesNestedInput, {
    nullable: true
  })
  tasks_tasksToworkspaces?: TasksUpdateOneWithoutWorkspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneWithoutWorkspacesNestedInput, {
    nullable: true
  })
  users_usersToworkspaces?: UsersUpdateOneWithoutWorkspacesNestedInput | undefined;
}
