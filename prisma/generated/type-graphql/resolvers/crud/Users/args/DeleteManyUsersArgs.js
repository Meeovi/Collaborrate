"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersWhereInput_1 = require("../../../inputs/UsersWhereInput");
let DeleteManyUsersArgs = class DeleteManyUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], DeleteManyUsersArgs.prototype, "where", void 0);
DeleteManyUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUsersArgs);
exports.DeleteManyUsersArgs = DeleteManyUsersArgs;
