import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleCreateManyProductsInputEnvelope } from "../inputs/Tax_ruleCreateManyProductsInputEnvelope";
import { Tax_ruleCreateOrConnectWithoutProductsInput } from "../inputs/Tax_ruleCreateOrConnectWithoutProductsInput";
import { Tax_ruleCreateWithoutProductsInput } from "../inputs/Tax_ruleCreateWithoutProductsInput";
import { Tax_ruleWhereUniqueInput } from "../inputs/Tax_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Tax_ruleCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class Tax_ruleCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Tax_ruleCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Tax_ruleCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Tax_ruleCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Tax_ruleCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Tax_ruleWhereUniqueInput[] | undefined;
}
