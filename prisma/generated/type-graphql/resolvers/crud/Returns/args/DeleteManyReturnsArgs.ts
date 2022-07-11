import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  where?: ReturnsWhereInput | undefined;
}
