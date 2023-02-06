"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInWhereUniqueInput_1 = require("../../../inputs/LogInWhereUniqueInput");
let DeleteOneLogInArgs = class DeleteOneLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereUniqueInput_1.LogInWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInWhereUniqueInput_1.LogInWhereUniqueInput)
], DeleteOneLogInArgs.prototype, "where", void 0);
DeleteOneLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneLogInArgs);
exports.DeleteOneLogInArgs = DeleteOneLogInArgs;
