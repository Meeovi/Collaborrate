"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersWhereUniqueInput_1 = require("../../../inputs/UsersWhereUniqueInput");
let FindUniqueUsersArgs = class FindUniqueUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], FindUniqueUsersArgs.prototype, "where", void 0);
FindUniqueUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUsersArgs);
exports.FindUniqueUsersArgs = FindUniqueUsersArgs;
