import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsCreateInput } from "../../../inputs/IntegrationsCreateInput";
import { IntegrationsUpdateInput } from "../../../inputs/IntegrationsUpdateInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationsCreateInput, {
    nullable: false
  })
  create!: IntegrationsCreateInput;

  @TypeGraphQL.Field(_type => IntegrationsUpdateInput, {
    nullable: false
  })
  update!: IntegrationsUpdateInput;
}
