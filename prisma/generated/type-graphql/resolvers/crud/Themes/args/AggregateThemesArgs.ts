import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesOrderByWithRelationInput } from "../../../inputs/ThemesOrderByWithRelationInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateThemesArgs {
  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  where?: ThemesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThemesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ThemesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThemesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
