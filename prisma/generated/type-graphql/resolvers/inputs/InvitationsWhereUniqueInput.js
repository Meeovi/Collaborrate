"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let InvitationsWhereUniqueInput = class InvitationsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InvitationsWhereUniqueInput.prototype, "id", void 0);
InvitationsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvitationsWhereUniqueInput", {
        isAbstract: true
    })
], InvitationsWhereUniqueInput);
exports.InvitationsWhereUniqueInput = InvitationsWhereUniqueInput;
