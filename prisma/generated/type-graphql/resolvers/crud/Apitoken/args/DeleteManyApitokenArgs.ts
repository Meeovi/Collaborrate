import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenWhereInput, {
    nullable: true
  })
  where?: ApitokenWhereInput | undefined;
}
