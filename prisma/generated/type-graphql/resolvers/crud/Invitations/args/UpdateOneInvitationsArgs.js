"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsUpdateInput_1 = require("../../../inputs/InvitationsUpdateInput");
const InvitationsWhereUniqueInput_1 = require("../../../inputs/InvitationsWhereUniqueInput");
let UpdateOneInvitationsArgs = class UpdateOneInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsUpdateInput_1.InvitationsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsUpdateInput_1.InvitationsUpdateInput)
], UpdateOneInvitationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput)
], UpdateOneInvitationsArgs.prototype, "where", void 0);
UpdateOneInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneInvitationsArgs);
exports.UpdateOneInvitationsArgs = UpdateOneInvitationsArgs;
