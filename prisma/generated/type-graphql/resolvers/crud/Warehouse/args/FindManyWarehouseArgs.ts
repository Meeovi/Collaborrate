import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WarehouseOrderByWithRelationAndSearchRelevanceInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";
import { WarehouseScalarFieldEnum } from "../../../../enums/WarehouseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseWhereInput, {
    nullable: true
  })
  where?: WarehouseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WarehouseOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: WarehouseOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => WarehouseWhereUniqueInput, {
    nullable: true
  })
  cursor?: WarehouseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WarehouseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "description" | "city" | "state" | "country" | "postal" | "status" | "image" | "products" | "category" | "isPublic"> | undefined;
}
