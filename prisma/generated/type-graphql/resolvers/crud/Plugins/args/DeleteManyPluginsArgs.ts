import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPluginsArgs {
  @TypeGraphQL.Field(_type => PluginsWhereInput, {
    nullable: true
  })
  where?: PluginsWhereInput | undefined;
}
