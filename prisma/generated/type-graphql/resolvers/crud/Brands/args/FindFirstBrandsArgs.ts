import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsOrderByWithRelationInput } from "../../../inputs/BrandsOrderByWithRelationInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";
import { BrandsScalarFieldEnum } from "../../../../enums/BrandsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  where?: BrandsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BrandsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BrandsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: true
  })
  cursor?: BrandsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BrandsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media"> | undefined;
}
