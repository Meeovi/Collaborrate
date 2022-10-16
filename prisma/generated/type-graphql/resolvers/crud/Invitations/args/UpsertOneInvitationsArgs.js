"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsCreateInput_1 = require("../../../inputs/InvitationsCreateInput");
const InvitationsUpdateInput_1 = require("../../../inputs/InvitationsUpdateInput");
const InvitationsWhereUniqueInput_1 = require("../../../inputs/InvitationsWhereUniqueInput");
let UpsertOneInvitationsArgs = class UpsertOneInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput)
], UpsertOneInvitationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsCreateInput_1.InvitationsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsCreateInput_1.InvitationsCreateInput)
], UpsertOneInvitationsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsUpdateInput_1.InvitationsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsUpdateInput_1.InvitationsUpdateInput)
], UpsertOneInvitationsArgs.prototype, "update", void 0);
UpsertOneInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneInvitationsArgs);
exports.UpsertOneInvitationsArgs = UpsertOneInvitationsArgs;
