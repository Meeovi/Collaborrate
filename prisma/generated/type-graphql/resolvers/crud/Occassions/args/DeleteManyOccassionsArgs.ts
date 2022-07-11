import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  where?: OccassionsWhereInput | undefined;
}
