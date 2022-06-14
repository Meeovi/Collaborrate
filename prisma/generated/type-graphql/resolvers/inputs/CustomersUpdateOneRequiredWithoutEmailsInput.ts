import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutEmailsInput } from "../inputs/CustomersCreateOrConnectWithoutEmailsInput";
import { CustomersCreateWithoutEmailsInput } from "../inputs/CustomersCreateWithoutEmailsInput";
import { CustomersUpdateWithoutEmailsInput } from "../inputs/CustomersUpdateWithoutEmailsInput";
import { CustomersUpsertWithoutEmailsInput } from "../inputs/CustomersUpsertWithoutEmailsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutEmailsInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutEmailsInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutEmailsInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutEmailsInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutEmailsInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutEmailsInput | undefined;
}
