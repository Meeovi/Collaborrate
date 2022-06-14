import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutWorkspacesInput } from "../inputs/CustomersCreateOrConnectWithoutWorkspacesInput";
import { CustomersCreateWithoutWorkspacesInput } from "../inputs/CustomersCreateWithoutWorkspacesInput";
import { CustomersUpdateWithoutWorkspacesInput } from "../inputs/CustomersUpdateWithoutWorkspacesInput";
import { CustomersUpsertWithoutWorkspacesInput } from "../inputs/CustomersUpsertWithoutWorkspacesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class CustomersUpdateOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutWorkspacesInput | undefined;

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

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutWorkspacesInput | undefined;
}
