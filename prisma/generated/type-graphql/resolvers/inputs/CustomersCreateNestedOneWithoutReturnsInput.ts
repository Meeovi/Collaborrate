import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutReturnsInput } from "../inputs/CustomersCreateOrConnectWithoutReturnsInput";
import { CustomersCreateWithoutReturnsInput } from "../inputs/CustomersCreateWithoutReturnsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutReturnsInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutReturnsInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutReturnsInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutReturnsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutReturnsInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutReturnsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
