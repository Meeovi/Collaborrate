import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsOrderByWithRelationInput } from "../../../inputs/Special_discountsOrderByWithRelationInput";
import { Special_discountsWhereInput } from "../../../inputs/Special_discountsWhereInput";
import { Special_discountsWhereUniqueInput } from "../../../inputs/Special_discountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsWhereInput, {
    nullable: true
  })
  where?: Special_discountsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Special_discountsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Special_discountsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Special_discountsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
