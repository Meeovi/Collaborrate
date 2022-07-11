import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginsCreateManyInput } from "../../../inputs/PluginsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPluginsArgs {
  @TypeGraphQL.Field(_type => [PluginsCreateManyInput], {
    nullable: false
  })
  data!: PluginsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
