import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsOrderByWithRelationInput } from "../../../inputs/TargetsOrderByWithRelationInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsWhereInput, {
    nullable: true
  })
  where?: TargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TargetsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TargetsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TargetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TargetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
