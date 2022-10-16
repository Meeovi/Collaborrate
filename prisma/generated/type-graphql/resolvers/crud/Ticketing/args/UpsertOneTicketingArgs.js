"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingCreateInput_1 = require("../../../inputs/TicketingCreateInput");
const TicketingUpdateInput_1 = require("../../../inputs/TicketingUpdateInput");
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
let UpsertOneTicketingArgs = class UpsertOneTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], UpsertOneTicketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingCreateInput_1.TicketingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingCreateInput_1.TicketingCreateInput)
], UpsertOneTicketingArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingUpdateInput_1.TicketingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingUpdateInput_1.TicketingUpdateInput)
], UpsertOneTicketingArgs.prototype, "update", void 0);
UpsertOneTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTicketingArgs);
exports.UpsertOneTicketingArgs = UpsertOneTicketingArgs;
