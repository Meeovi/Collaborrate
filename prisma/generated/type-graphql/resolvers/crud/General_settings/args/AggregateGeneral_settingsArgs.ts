import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsOrderByWithRelationInput } from "../../../inputs/General_settingsOrderByWithRelationInput";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";
import { General_settingsWhereUniqueInput } from "../../../inputs/General_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsWhereInput, {
    nullable: true
  })
  where?: General_settingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [General_settingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: General_settingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => General_settingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: General_settingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
