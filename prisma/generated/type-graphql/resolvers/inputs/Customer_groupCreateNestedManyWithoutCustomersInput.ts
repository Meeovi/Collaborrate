import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateManyCustomersInputEnvelope } from "../inputs/Customer_groupCreateManyCustomersInputEnvelope";
import { Customer_groupCreateOrConnectWithoutCustomersInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomersInput";
import { Customer_groupCreateWithoutCustomersInput } from "../inputs/Customer_groupCreateWithoutCustomersInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class Customer_groupCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [Customer_groupCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: Customer_groupCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_groupCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_groupWhereUniqueInput[] | undefined;
}
