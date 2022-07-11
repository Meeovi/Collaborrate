import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosWhereInput } from "../../../inputs/Credit_memosWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCredit_memosArgs {
  @TypeGraphQL.Field(_type => Credit_memosWhereInput, {
    nullable: true
  })
  where?: Credit_memosWhereInput | undefined;
}
