import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsUpdateManyMutationInput } from "../../../inputs/PluginsUpdateManyMutationInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPluginsArgs {
  @TypeGraphQL.Field(_type => PluginsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PluginsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PluginsWhereInput, {
    nullable: true
  })
  where?: PluginsWhereInput | undefined;
}
