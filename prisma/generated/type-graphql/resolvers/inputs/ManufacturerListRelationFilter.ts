import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerWhereInput } from "../inputs/ManufacturerWhereInput";

@TypeGraphQL.InputType("ManufacturerListRelationFilter", {
  isAbstract: true
})
export class ManufacturerListRelationFilter {
  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  every?: ManufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  some?: ManufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  none?: ManufacturerWhereInput | undefined;
}
