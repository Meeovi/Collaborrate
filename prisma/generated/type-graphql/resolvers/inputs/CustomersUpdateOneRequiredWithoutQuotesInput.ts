import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutQuotesInput } from "../inputs/CustomersCreateOrConnectWithoutQuotesInput";
import { CustomersCreateWithoutQuotesInput } from "../inputs/CustomersCreateWithoutQuotesInput";
import { CustomersUpdateWithoutQuotesInput } from "../inputs/CustomersUpdateWithoutQuotesInput";
import { CustomersUpsertWithoutQuotesInput } from "../inputs/CustomersUpsertWithoutQuotesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutQuotesInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutQuotesInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutQuotesInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutQuotesInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutQuotesInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutQuotesInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutQuotesInput | undefined;
}
