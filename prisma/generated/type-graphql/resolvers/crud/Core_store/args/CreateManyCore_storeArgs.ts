import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeCreateManyInput } from "../../../inputs/Core_storeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCore_storeArgs {
  @TypeGraphQL.Field(_type => [Core_storeCreateManyInput], {
    nullable: false
  })
  data!: Core_storeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
