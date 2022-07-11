import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerCreateManyProductsInputEnvelope } from "../inputs/ManufacturerCreateManyProductsInputEnvelope";
import { ManufacturerCreateOrConnectWithoutProductsInput } from "../inputs/ManufacturerCreateOrConnectWithoutProductsInput";
import { ManufacturerCreateWithoutProductsInput } from "../inputs/ManufacturerCreateWithoutProductsInput";
import { ManufacturerWhereUniqueInput } from "../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.InputType("ManufacturerCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class ManufacturerCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [ManufacturerCreateWithoutProductsInput], {
    nullable: true
  })
  create?: ManufacturerCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: ManufacturerCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => ManufacturerCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: ManufacturerCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerWhereUniqueInput], {
    nullable: true
  })
  connect?: ManufacturerWhereUniqueInput[] | undefined;
}
