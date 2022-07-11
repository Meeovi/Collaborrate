import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsWhereInput, {
    nullable: true
  })
  where?: IntegrationsWhereInput | undefined;
}
