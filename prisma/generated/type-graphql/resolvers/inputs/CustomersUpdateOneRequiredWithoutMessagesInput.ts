import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutMessagesInput } from "../inputs/CustomersCreateOrConnectWithoutMessagesInput";
import { CustomersCreateWithoutMessagesInput } from "../inputs/CustomersCreateWithoutMessagesInput";
import { CustomersUpdateWithoutMessagesInput } from "../inputs/CustomersUpdateWithoutMessagesInput";
import { CustomersUpsertWithoutMessagesInput } from "../inputs/CustomersUpsertWithoutMessagesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutMessagesInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutMessagesInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutMessagesInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutMessagesInput | undefined;
}
