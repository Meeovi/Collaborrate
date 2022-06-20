import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/BrandsOrderByWithRelationAndSearchRelevanceInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  where?: BrandsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BrandsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: BrandsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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
}
