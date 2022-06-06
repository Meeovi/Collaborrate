"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersUpdateInput_1 = require("../../../inputs/UsersUpdateInput");
const UsersWhereUniqueInput_1 = require("../../../inputs/UsersWhereUniqueInput");
let UpdateUsersArgs = class UpdateUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateInput_1.UsersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateInput_1.UsersUpdateInput)
], UpdateUsersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], UpdateUsersArgs.prototype, "where", void 0);
UpdateUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateUsersArgs);
exports.UpdateUsersArgs = UpdateUsersArgs;
