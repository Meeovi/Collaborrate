"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateInput_1 = require("../../../inputs/UsersCreateInput");
let CreateOneUsersArgs = class CreateOneUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateInput_1.UsersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateInput_1.UsersCreateInput)
], CreateOneUsersArgs.prototype, "data", void 0);
CreateOneUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUsersArgs);
exports.CreateOneUsersArgs = CreateOneUsersArgs;
