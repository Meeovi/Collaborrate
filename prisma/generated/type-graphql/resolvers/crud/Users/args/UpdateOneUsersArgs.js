"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersUpdateInput_1 = require("../../../inputs/UsersUpdateInput");
const UsersWhereUniqueInput_1 = require("../../../inputs/UsersWhereUniqueInput");
let UpdateOneUsersArgs = class UpdateOneUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateInput_1.UsersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateInput_1.UsersUpdateInput)
], UpdateOneUsersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UpdateOneUsersArgs.prototype, "where", void 0);
UpdateOneUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUsersArgs);
exports.UpdateOneUsersArgs = UpdateOneUsersArgs;
