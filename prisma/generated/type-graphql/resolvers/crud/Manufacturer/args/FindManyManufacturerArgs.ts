import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerOrderByWithRelationInput } from "../../../inputs/ManufacturerOrderByWithRelationInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";
import { ManufacturerScalarFieldEnum } from "../../../../enums/ManufacturerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  where?: ManufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ManufacturerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: true
  })
  cursor?: ManufacturerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media"> | undefined;
}
