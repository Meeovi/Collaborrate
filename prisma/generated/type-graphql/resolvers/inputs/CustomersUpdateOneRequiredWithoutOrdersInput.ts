import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutOrdersInput } from "../inputs/CustomersCreateOrConnectWithoutOrdersInput";
import { CustomersCreateWithoutOrdersInput } from "../inputs/CustomersCreateWithoutOrdersInput";
import { CustomersUpdateWithoutOrdersInput } from "../inputs/CustomersUpdateWithoutOrdersInput";
import { CustomersUpsertWithoutOrdersInput } from "../inputs/CustomersUpsertWithoutOrdersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutOrdersInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutOrdersInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutOrdersInput | undefined;
}
