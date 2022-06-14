import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { BrandsUpdateOneWithoutWorkspacesInput } from "../inputs/BrandsUpdateOneWithoutWorkspacesInput";
import { CategoriesUpdateOneWithoutWorkspacesInput } from "../inputs/CategoriesUpdateOneWithoutWorkspacesInput";
import { CustomersUpdateOneWithoutWorkspacesInput } from "../inputs/CustomersUpdateOneWithoutWorkspacesInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneWithoutWorkspacesInput } from "../inputs/ProductsUpdateOneWithoutWorkspacesInput";
import { ShopsUpdateOneWithoutWorkspacesInput } from "../inputs/ShopsUpdateOneWithoutWorkspacesInput";
import { TasksUpdateOneWithoutWorkspacesInput } from "../inputs/TasksUpdateOneWithoutWorkspacesInput";
import { UsersUpdateOneWithoutWorkspacesInput } from "../inputs/UsersUpdateOneWithoutWorkspacesInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithoutProjects_projectsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithoutProjects_projectsToworkspacesInput {
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

  @TypeGraphQL.Field(_type => BrandsUpdateOneWithoutWorkspacesInput, {
    nullable: true
  })
  brands_brandsToworkspaces?: BrandsUpdateOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesUpdateOneWithoutWorkspacesInput, {
    nullable: true
  })
  categories?: CategoriesUpdateOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateOneWithoutWorkspacesInput, {
    nullable: true
  })
  customers_customersToworkspaces?: CustomersUpdateOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutWorkspacesInput, {
    nullable: true
  })
  products_productsToworkspaces?: ProductsUpdateOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ShopsUpdateOneWithoutWorkspacesInput, {
    nullable: true
  })
  shops_shopsToworkspaces?: ShopsUpdateOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneWithoutWorkspacesInput, {
    nullable: true
  })
  tasks_tasksToworkspaces?: TasksUpdateOneWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneWithoutWorkspacesInput, {
    nullable: true
  })
  users_usersToworkspaces?: UsersUpdateOneWithoutWorkspacesInput | undefined;
}
