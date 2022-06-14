import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsCreateManyInput } from "../../../inputs/AgreementsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAgreementsArgs {
  @TypeGraphQL.Field(_type => [AgreementsCreateManyInput], {
    nullable: false
  })
  data!: AgreementsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
