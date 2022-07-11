import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigCreateManyInput } from "../../../inputs/GlobalConfigCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGlobalConfigArgs {
  @TypeGraphQL.Field(_type => [GlobalConfigCreateManyInput], {
    nullable: false
  })
  data!: GlobalConfigCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
