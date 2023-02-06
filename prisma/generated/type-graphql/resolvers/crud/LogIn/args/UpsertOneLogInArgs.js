"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInCreateInput_1 = require("../../../inputs/LogInCreateInput");
const LogInUpdateInput_1 = require("../../../inputs/LogInUpdateInput");
const LogInWhereUniqueInput_1 = require("../../../inputs/LogInWhereUniqueInput");
let UpsertOneLogInArgs = class UpsertOneLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereUniqueInput_1.LogInWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInWhereUniqueInput_1.LogInWhereUniqueInput)
], UpsertOneLogInArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInCreateInput_1.LogInCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInCreateInput_1.LogInCreateInput)
], UpsertOneLogInArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInUpdateInput_1.LogInUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LogInUpdateInput_1.LogInUpdateInput)
], UpsertOneLogInArgs.prototype, "update", void 0);
UpsertOneLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneLogInArgs);
exports.UpsertOneLogInArgs = UpsertOneLogInArgs;
