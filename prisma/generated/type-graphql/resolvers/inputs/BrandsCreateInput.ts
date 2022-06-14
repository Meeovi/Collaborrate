import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateNestedManyWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerCreateNestedManyWithoutBrands_brandsTomediamanagerInput";
import { ProductsCreateNestedOneWithoutBrandsInput } from "../inputs/ProductsCreateNestedOneWithoutBrandsInput";
import { WorkspacesCreateNestedManyWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesCreateNestedManyWithoutBrands_brandsToworkspacesInput";

@TypeGraphQL.InputType("BrandsCreateInput", {
  isAbstract: true
})
export class BrandsCreateInput {
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
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutBrandsInput, {
    nullable: true
  })
  products?: ProductsCreateNestedOneWithoutBrandsInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateNestedManyWithoutBrands_brandsTomediamanagerInput, {
    nullable: true
  })
  mediamanager?: MediamanagerCreateNestedManyWithoutBrands_brandsTomediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutBrands_brandsToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutBrands_brandsToworkspacesInput | undefined;
}
