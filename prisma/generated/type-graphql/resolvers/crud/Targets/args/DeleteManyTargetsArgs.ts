import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsWhereInput, {
    nullable: true
  })
  where?: TargetsWhereInput | undefined;
}
