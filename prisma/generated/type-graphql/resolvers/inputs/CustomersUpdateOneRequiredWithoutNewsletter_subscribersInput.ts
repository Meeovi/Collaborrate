import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateOrConnectWithoutNewsletter_subscribersInput";
import { CustomersCreateWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateWithoutNewsletter_subscribersInput";
import { CustomersUpdateWithoutNewsletter_subscribersInput } from "../inputs/CustomersUpdateWithoutNewsletter_subscribersInput";
import { CustomersUpsertWithoutNewsletter_subscribersInput } from "../inputs/CustomersUpsertWithoutNewsletter_subscribersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutNewsletter_subscribersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutNewsletter_subscribersInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutNewsletter_subscribersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutNewsletter_subscribersInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutNewsletter_subscribersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutNewsletter_subscribersInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutNewsletter_subscribersInput | undefined;
}
