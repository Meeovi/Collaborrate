import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutWorkspacesInput } from "../inputs/ProductsCreateOrConnectWithoutWorkspacesInput";
import { ProductsCreateWithoutWorkspacesInput } from "../inputs/ProductsCreateWithoutWorkspacesInput";
import { ProductsUpdateWithoutWorkspacesInput } from "../inputs/ProductsUpdateWithoutWorkspacesInput";
import { ProductsUpsertWithoutWorkspacesInput } from "../inputs/ProductsUpsertWithoutWorkspacesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutWorkspacesNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutWorkspacesNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutWorkspacesInput | undefined;
}
