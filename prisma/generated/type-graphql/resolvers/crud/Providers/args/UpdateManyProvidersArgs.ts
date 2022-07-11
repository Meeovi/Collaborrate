import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersUpdateManyMutationInput } from "../../../inputs/ProvidersUpdateManyMutationInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProvidersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProvidersWhereInput, {
    nullable: true
  })
  where?: ProvidersWhereInput | undefined;
}
