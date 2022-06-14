import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersCreateInput } from "../../../inputs/ProvidersCreateInput";
import { ProvidersUpdateInput } from "../../../inputs/ProvidersUpdateInput";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersWhereUniqueInput, {
    nullable: false
  })
  where!: ProvidersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProvidersCreateInput, {
    nullable: false
  })
  create!: ProvidersCreateInput;

  @TypeGraphQL.Field(_type => ProvidersUpdateInput, {
    nullable: false
  })
  update!: ProvidersUpdateInput;
}
