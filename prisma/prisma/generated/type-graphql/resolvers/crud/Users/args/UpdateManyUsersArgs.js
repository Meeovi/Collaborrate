"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersUpdateManyMutationInput_1 = require("../../../inputs/UsersUpdateManyMutationInput");
const UsersWhereInput_1 = require("../../../inputs/UsersWhereInput");
let UpdateManyUsersArgs = class UpdateManyUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateManyMutationInput_1.UsersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersUpdateManyMutationInput_1.UsersUpdateManyMutationInput)
], UpdateManyUsersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], UpdateManyUsersArgs.prototype, "where", void 0);
UpdateManyUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUsersArgs);
exports.UpdateManyUsersArgs = UpdateManyUsersArgs;
