import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersWhereInput, {
    nullable: true
  })
  where?: ProvidersWhereInput | undefined;
}
