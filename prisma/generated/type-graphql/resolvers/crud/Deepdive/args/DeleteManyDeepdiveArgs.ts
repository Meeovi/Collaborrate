import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveWhereInput, {
    nullable: true
  })
  where?: DeepdiveWhereInput | undefined;
}
