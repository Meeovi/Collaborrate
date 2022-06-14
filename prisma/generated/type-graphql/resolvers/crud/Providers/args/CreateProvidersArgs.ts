import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersCreateInput } from "../../../inputs/ProvidersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersCreateInput, {
    nullable: false
  })
  data!: ProvidersCreateInput;
}
