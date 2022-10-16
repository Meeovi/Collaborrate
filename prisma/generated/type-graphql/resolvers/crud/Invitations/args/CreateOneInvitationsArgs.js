"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsCreateInput_1 = require("../../../inputs/InvitationsCreateInput");
let CreateOneInvitationsArgs = class CreateOneInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsCreateInput_1.InvitationsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvitationsCreateInput_1.InvitationsCreateInput)
], CreateOneInvitationsArgs.prototype, "data", void 0);
CreateOneInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneInvitationsArgs);
exports.CreateOneInvitationsArgs = CreateOneInvitationsArgs;
