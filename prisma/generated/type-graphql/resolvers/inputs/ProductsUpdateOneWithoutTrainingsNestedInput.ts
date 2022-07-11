import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutTrainingsInput } from "../inputs/ProductsCreateOrConnectWithoutTrainingsInput";
import { ProductsCreateWithoutTrainingsInput } from "../inputs/ProductsCreateWithoutTrainingsInput";
import { ProductsUpdateWithoutTrainingsInput } from "../inputs/ProductsUpdateWithoutTrainingsInput";
import { ProductsUpsertWithoutTrainingsInput } from "../inputs/ProductsUpsertWithoutTrainingsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutTrainingsNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutTrainingsNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutTrainingsInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutTrainingsInput | undefined;

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

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutTrainingsInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutTrainingsInput | undefined;
}
