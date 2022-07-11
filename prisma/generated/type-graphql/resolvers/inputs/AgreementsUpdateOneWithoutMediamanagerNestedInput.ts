import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsCreateOrConnectWithoutMediamanagerInput } from "../inputs/AgreementsCreateOrConnectWithoutMediamanagerInput";
import { AgreementsCreateWithoutMediamanagerInput } from "../inputs/AgreementsCreateWithoutMediamanagerInput";
import { AgreementsUpdateWithoutMediamanagerInput } from "../inputs/AgreementsUpdateWithoutMediamanagerInput";
import { AgreementsUpsertWithoutMediamanagerInput } from "../inputs/AgreementsUpsertWithoutMediamanagerInput";
import { AgreementsWhereUniqueInput } from "../inputs/AgreementsWhereUniqueInput";

@TypeGraphQL.InputType("AgreementsUpdateOneWithoutMediamanagerNestedInput", {
  isAbstract: true
})
export class AgreementsUpdateOneWithoutMediamanagerNestedInput {
  @TypeGraphQL.Field(_type => AgreementsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: AgreementsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: AgreementsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsUpsertWithoutMediamanagerInput, {
    nullable: true
  })
  upsert?: AgreementsUpsertWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: true
  })
  connect?: AgreementsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsUpdateWithoutMediamanagerInput, {
    nullable: true
  })
  update?: AgreementsUpdateWithoutMediamanagerInput | undefined;
}
