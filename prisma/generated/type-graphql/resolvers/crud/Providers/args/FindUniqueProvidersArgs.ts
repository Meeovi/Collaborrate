import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersWhereUniqueInput, {
    nullable: false
  })
  where!: ProvidersWhereUniqueInput;
}
