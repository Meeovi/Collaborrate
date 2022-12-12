"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTicketingOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
let FindUniqueTicketingOrThrowArgs = class FindUniqueTicketingOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], FindUniqueTicketingOrThrowArgs.prototype, "where", void 0);
FindUniqueTicketingOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTicketingOrThrowArgs);
exports.FindUniqueTicketingOrThrowArgs = FindUniqueTicketingOrThrowArgs;
