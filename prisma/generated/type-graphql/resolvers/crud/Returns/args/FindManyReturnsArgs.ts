import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReturnsOrderByWithRelationAndSearchRelevanceInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";
import { ReturnsScalarFieldEnum } from "../../../../enums/ReturnsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  where?: ReturnsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReturnsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ReturnsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReturnsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReturnsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "validity" | "return_prefix" | "prod_id" | "cust_id"> | undefined;
}
