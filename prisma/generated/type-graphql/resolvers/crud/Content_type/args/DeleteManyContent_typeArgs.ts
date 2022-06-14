import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeWhereInput } from "../../../inputs/Content_typeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeWhereInput, {
    nullable: true
  })
  where?: Content_typeWhereInput | undefined;
}
