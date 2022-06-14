import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsOrderByWithRelationInput } from "../../../inputs/ReturnsOrderByWithRelationInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  where?: ReturnsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReturnsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReturnsOrderByWithRelationInput[] | undefined;

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
}
