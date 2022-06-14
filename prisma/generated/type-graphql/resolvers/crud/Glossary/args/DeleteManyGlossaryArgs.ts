import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryWhereInput, {
    nullable: true
  })
  where?: GlossaryWhereInput | undefined;
}
