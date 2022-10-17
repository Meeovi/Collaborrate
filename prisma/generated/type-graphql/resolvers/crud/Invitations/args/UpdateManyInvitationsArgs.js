"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsUpdateManyMutationInput_1 = require("../../../inputs/InvitationsUpdateManyMutationInput");
const InvitationsWhereInput_1 = require("../../../inputs/InvitationsWhereInput");
let UpdateManyInvitationsArgs = class UpdateManyInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsUpdateManyMutationInput_1.InvitationsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsUpdateManyMutationInput_1.InvitationsUpdateManyMutationInput)
], UpdateManyInvitationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereInput_1.InvitationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsWhereInput_1.InvitationsWhereInput)
], UpdateManyInvitationsArgs.prototype, "where", void 0);
UpdateManyInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInvitationsArgs);
exports.UpdateManyInvitationsArgs = UpdateManyInvitationsArgs;
