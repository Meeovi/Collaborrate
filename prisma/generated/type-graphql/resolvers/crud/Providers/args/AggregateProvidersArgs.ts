import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersOrderByWithRelationInput } from "../../../inputs/ProvidersOrderByWithRelationInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersWhereInput, {
    nullable: true
  })
  where?: ProvidersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProvidersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProvidersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProvidersWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProvidersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
