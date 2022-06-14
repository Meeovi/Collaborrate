import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesOrderByWithRelationInput } from "../../../inputs/PagesOrderByWithRelationInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePagesArgs {
  @TypeGraphQL.Field(_type => PagesWhereInput, {
    nullable: true
  })
  where?: PagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PagesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PagesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PagesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PagesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
