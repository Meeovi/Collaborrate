import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutProjectsInput } from "../inputs/CustomersCreateOrConnectWithoutProjectsInput";
import { CustomersCreateWithoutProjectsInput } from "../inputs/CustomersCreateWithoutProjectsInput";
import { CustomersUpdateWithoutProjectsInput } from "../inputs/CustomersUpdateWithoutProjectsInput";
import { CustomersUpsertWithoutProjectsInput } from "../inputs/CustomersUpsertWithoutProjectsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneWithoutProjectsNestedInput", {
  isAbstract: true
})
export class CustomersUpdateOneWithoutProjectsNestedInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutProjectsInput | undefined;

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

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutProjectsInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutProjectsInput | undefined;
}
