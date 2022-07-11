import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerWhereInput } from "../inputs/MediamanagerWhereInput";

@TypeGraphQL.InputType("MediamanagerListRelationFilter", {
  isAbstract: true
})
export class MediamanagerListRelationFilter {
  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  every?: MediamanagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  some?: MediamanagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  none?: MediamanagerWhereInput | undefined;
}
