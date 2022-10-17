"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsCreateManyInput_1 = require("../../../inputs/InvitationsCreateManyInput");
let CreateManyInvitationsArgs = class CreateManyInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvitationsCreateManyInput_1.InvitationsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInvitationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInvitationsArgs.prototype, "skipDuplicates", void 0);
CreateManyInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInvitationsArgs);
exports.CreateManyInvitationsArgs = CreateManyInvitationsArgs;
