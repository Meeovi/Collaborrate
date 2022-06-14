import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersUpdateInput } from "../../../inputs/ProvidersUpdateInput";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersUpdateInput, {
    nullable: false
  })
  data!: ProvidersUpdateInput;

  @TypeGraphQL.Field(_type => ProvidersWhereUniqueInput, {
    nullable: false
  })
  where!: ProvidersWhereUniqueInput;
}
