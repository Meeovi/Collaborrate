"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersWhereUniqueInput_1 = require("../../../inputs/UsersWhereUniqueInput");
let DeleteUsersArgs = class DeleteUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], DeleteUsersArgs.prototype, "where", void 0);
DeleteUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteUsersArgs);
exports.DeleteUsersArgs = DeleteUsersArgs;
