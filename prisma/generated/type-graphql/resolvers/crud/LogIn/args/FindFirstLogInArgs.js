"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInOrderByWithRelationInput_1 = require("../../../inputs/LogInOrderByWithRelationInput");
const LogInWhereInput_1 = require("../../../inputs/LogInWhereInput");
const LogInWhereUniqueInput_1 = require("../../../inputs/LogInWhereUniqueInput");
const LogInScalarFieldEnum_1 = require("../../../../enums/LogInScalarFieldEnum");
let FindFirstLogInArgs = class FindFirstLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereInput_1.LogInWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereInput_1.LogInWhereInput)
], FindFirstLogInArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInOrderByWithRelationInput_1.LogInOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLogInArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereUniqueInput_1.LogInWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereUniqueInput_1.LogInWhereUniqueInput)
], FindFirstLogInArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLogInArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLogInArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInScalarFieldEnum_1.LogInScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLogInArgs.prototype, "distinct", void 0);
FindFirstLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLogInArgs);
exports.FindFirstLogInArgs = FindFirstLogInArgs;
