import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateOrConnectWithoutNewsletter_subscribersInput";
import { CustomersCreateWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateWithoutNewsletter_subscribersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutNewsletter_subscribersInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutNewsletter_subscribersInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutNewsletter_subscribersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutNewsletter_subscribersInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutNewsletter_subscribersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
