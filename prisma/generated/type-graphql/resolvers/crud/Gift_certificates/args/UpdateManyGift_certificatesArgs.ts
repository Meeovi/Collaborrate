import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesUpdateManyMutationInput } from "../../../inputs/Gift_certificatesUpdateManyMutationInput";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Gift_certificatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Gift_certificatesWhereInput, {
    nullable: true
  })
  where?: Gift_certificatesWhereInput | undefined;
}
