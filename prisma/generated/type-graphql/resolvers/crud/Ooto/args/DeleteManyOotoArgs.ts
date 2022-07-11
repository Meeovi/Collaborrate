import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOotoArgs {
  @TypeGraphQL.Field(_type => OotoWhereInput, {
    nullable: true
  })
  where?: OotoWhereInput | undefined;
}
