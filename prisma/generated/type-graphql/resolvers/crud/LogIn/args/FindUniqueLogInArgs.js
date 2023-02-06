"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInWhereUniqueInput_1 = require("../../../inputs/LogInWhereUniqueInput");
let FindUniqueLogInArgs = class FindUniqueLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereUniqueInput_1.LogInWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInWhereUniqueInput_1.LogInWhereUniqueInput)
], FindUniqueLogInArgs.prototype, "where", void 0);
FindUniqueLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLogInArgs);
exports.FindUniqueLogInArgs = FindUniqueLogInArgs;
