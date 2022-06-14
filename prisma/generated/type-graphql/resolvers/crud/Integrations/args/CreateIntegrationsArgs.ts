import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsCreateInput } from "../../../inputs/IntegrationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsCreateInput, {
    nullable: false
  })
  data!: IntegrationsCreateInput;
}
