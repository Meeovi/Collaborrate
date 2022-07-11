import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateCreateManyProductsInputEnvelope } from "../inputs/Tax_rateCreateManyProductsInputEnvelope";
import { Tax_rateCreateOrConnectWithoutProductsInput } from "../inputs/Tax_rateCreateOrConnectWithoutProductsInput";
import { Tax_rateCreateWithoutProductsInput } from "../inputs/Tax_rateCreateWithoutProductsInput";
import { Tax_rateWhereUniqueInput } from "../inputs/Tax_rateWhereUniqueInput";

@TypeGraphQL.InputType("Tax_rateCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class Tax_rateCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Tax_rateCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Tax_rateCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Tax_rateCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_rateCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Tax_rateCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput], {
    nullable: true
  })
  connect?: Tax_rateWhereUniqueInput[] | undefined;
}
