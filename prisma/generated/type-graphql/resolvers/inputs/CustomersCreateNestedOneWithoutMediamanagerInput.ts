import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutMediamanagerInput } from "../inputs/CustomersCreateOrConnectWithoutMediamanagerInput";
import { CustomersCreateWithoutMediamanagerInput } from "../inputs/CustomersCreateWithoutMediamanagerInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
