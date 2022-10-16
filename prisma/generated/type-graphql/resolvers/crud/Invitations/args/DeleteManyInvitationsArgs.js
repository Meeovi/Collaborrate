"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsWhereInput_1 = require("../../../inputs/InvitationsWhereInput");
let DeleteManyInvitationsArgs = class DeleteManyInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereInput_1.InvitationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsWhereInput_1.InvitationsWhereInput)
], DeleteManyInvitationsArgs.prototype, "where", void 0);
DeleteManyInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInvitationsArgs);
exports.DeleteManyInvitationsArgs = DeleteManyInvitationsArgs;
