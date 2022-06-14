import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutOrdersInput } from "../inputs/CustomersCreateOrConnectWithoutOrdersInput";
import { CustomersCreateWithoutOrdersInput } from "../inputs/CustomersCreateWithoutOrdersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
