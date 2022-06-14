import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsUpdateManyMutationInput } from "../../../inputs/IntegrationsUpdateManyMutationInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IntegrationsWhereInput, {
    nullable: true
  })
  where?: IntegrationsWhereInput | undefined;
}
