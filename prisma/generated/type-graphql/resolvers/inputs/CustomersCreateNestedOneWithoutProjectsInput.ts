import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutProjectsInput } from "../inputs/CustomersCreateOrConnectWithoutProjectsInput";
import { CustomersCreateWithoutProjectsInput } from "../inputs/CustomersCreateWithoutProjectsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutProjectsInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
