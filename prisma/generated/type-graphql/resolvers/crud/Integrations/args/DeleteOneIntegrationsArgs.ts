import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationsWhereUniqueInput;
}
