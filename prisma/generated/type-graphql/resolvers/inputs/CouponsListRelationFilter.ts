import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsWhereInput } from "../inputs/CouponsWhereInput";

@TypeGraphQL.InputType("CouponsListRelationFilter", {
  isAbstract: true
})
export class CouponsListRelationFilter {
  @TypeGraphQL.Field(_type => CouponsWhereInput, {
    nullable: true
  })
  every?: CouponsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CouponsWhereInput, {
    nullable: true
  })
  some?: CouponsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CouponsWhereInput, {
    nullable: true
  })
  none?: CouponsWhereInput | undefined;
}
