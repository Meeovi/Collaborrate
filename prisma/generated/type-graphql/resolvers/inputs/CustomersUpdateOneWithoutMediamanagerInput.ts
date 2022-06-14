import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutMediamanagerInput } from "../inputs/CustomersCreateOrConnectWithoutMediamanagerInput";
import { CustomersCreateWithoutMediamanagerInput } from "../inputs/CustomersCreateWithoutMediamanagerInput";
import { CustomersUpdateWithoutMediamanagerInput } from "../inputs/CustomersUpdateWithoutMediamanagerInput";
import { CustomersUpsertWithoutMediamanagerInput } from "../inputs/CustomersUpsertWithoutMediamanagerInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class CustomersUpdateOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutMediamanagerInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutMediamanagerInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutMediamanagerInput | undefined;
}
