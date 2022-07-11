import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsWhereInput, {
    nullable: true
  })
  where?: VisitsWhereInput | undefined;
}
