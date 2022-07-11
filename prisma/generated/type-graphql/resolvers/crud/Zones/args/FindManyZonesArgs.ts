import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ZonesOrderByWithRelationAndSearchRelevanceInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";
import { ZonesScalarFieldEnum } from "../../../../enums/ZonesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyZonesArgs {
  @TypeGraphQL.Field(_type => ZonesWhereInput, {
    nullable: true
  })
  where?: ZonesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ZonesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ZonesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ZonesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ZonesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ZonesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "updated_at" | "scope" | "type" | "country" | "code"> | undefined;
}
