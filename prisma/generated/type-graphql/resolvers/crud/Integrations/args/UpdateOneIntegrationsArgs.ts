import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsUpdateInput } from "../../../inputs/IntegrationsUpdateInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsUpdateInput, {
    nullable: false
  })
  data!: IntegrationsUpdateInput;

  @TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationsWhereUniqueInput;
}
