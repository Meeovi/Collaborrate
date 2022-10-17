"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsWhereUniqueInput_1 = require("../../../inputs/InvitationsWhereUniqueInput");
let DeleteOneInvitationsArgs = class DeleteOneInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput)
], DeleteOneInvitationsArgs.prototype, "where", void 0);
DeleteOneInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneInvitationsArgs);
exports.DeleteOneInvitationsArgs = DeleteOneInvitationsArgs;
