import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsCreateManyInput } from "../../../inputs/ShopsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShopsArgs {
  @TypeGraphQL.Field(_type => [ShopsCreateManyInput], {
    nullable: false
  })
  data!: ShopsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
