"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesCreateInput_1 = require("../../../inputs/MessagesCreateInput");
const MessagesUpdateInput_1 = require("../../../inputs/MessagesUpdateInput");
const MessagesWhereUniqueInput_1 = require("../../../inputs/MessagesWhereUniqueInput");
let UpsertOneMessagesArgs = class UpsertOneMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereUniqueInput_1.MessagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesWhereUniqueInput_1.MessagesWhereUniqueInput)
], UpsertOneMessagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesCreateInput_1.MessagesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesCreateInput_1.MessagesCreateInput)
], UpsertOneMessagesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesUpdateInput_1.MessagesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessagesUpdateInput_1.MessagesUpdateInput)
], UpsertOneMessagesArgs.prototype, "update", void 0);
UpsertOneMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneMessagesArgs);
exports.UpsertOneMessagesArgs = UpsertOneMessagesArgs;
