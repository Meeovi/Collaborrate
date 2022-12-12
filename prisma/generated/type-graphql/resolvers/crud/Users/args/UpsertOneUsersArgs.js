"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateInput_1 = require("../../../inputs/UsersCreateInput");
const UsersUpdateInput_1 = require("../../../inputs/UsersUpdateInput");
const UsersWhereUniqueInput_1 = require("../../../inputs/UsersWhereUniqueInput");
let UpsertOneUsersArgs = class UpsertOneUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UpsertOneUsersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateInput_1.UsersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateInput_1.UsersCreateInput)
], UpsertOneUsersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateInput_1.UsersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateInput_1.UsersUpdateInput)
], UpsertOneUsersArgs.prototype, "update", void 0);
UpsertOneUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUsersArgs);
exports.UpsertOneUsersArgs = UpsertOneUsersArgs;
