import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ShopsOrderByWithRelationAndSearchRelevanceInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShopsArgs {
  @TypeGraphQL.Field(_type => ShopsWhereInput, {
    nullable: true
  })
  where?: ShopsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShopsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ShopsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShopsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
