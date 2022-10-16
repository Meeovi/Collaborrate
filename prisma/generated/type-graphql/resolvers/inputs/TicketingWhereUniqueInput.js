"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let TicketingWhereUniqueInput = class TicketingWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TicketingWhereUniqueInput.prototype, "id", void 0);
TicketingWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TicketingWhereUniqueInput", {
        isAbstract: true
    })
], TicketingWhereUniqueInput);
exports.TicketingWhereUniqueInput = TicketingWhereUniqueInput;
