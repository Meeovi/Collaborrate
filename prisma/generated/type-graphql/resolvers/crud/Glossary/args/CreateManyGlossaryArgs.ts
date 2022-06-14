import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryCreateManyInput } from "../../../inputs/GlossaryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGlossaryArgs {
  @TypeGraphQL.Field(_type => [GlossaryCreateManyInput], {
    nullable: false
  })
  data!: GlossaryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
