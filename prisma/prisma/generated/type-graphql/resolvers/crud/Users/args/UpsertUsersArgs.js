"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersCreateInput_1 = require("../../../inputs/UsersCreateInput");
const UsersUpdateInput_1 = require("../../../inputs/UsersUpdateInput");
const UsersWhereUniqueInput_1 = require("../../../inputs/UsersWhereUniqueInput");
let UpsertUsersArgs = class UpsertUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UpsertUsersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCreateInput_1.UsersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersCreateInput_1.UsersCreateInput)
], UpsertUsersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateInput_1.UsersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateInput_1.UsersUpdateInput)
], UpsertUsersArgs.prototype, "update", void 0);
UpsertUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertUsersArgs);
exports.UpsertUsersArgs = UpsertUsersArgs;
