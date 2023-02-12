"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInOrderByWithRelationInput_1 = require("../../../inputs/LogInOrderByWithRelationInput");
const LogInWhereInput_1 = require("../../../inputs/LogInWhereInput");
const LogInWhereUniqueInput_1 = require("../../../inputs/LogInWhereUniqueInput");
const LogInScalarFieldEnum_1 = require("../../../../enums/LogInScalarFieldEnum");
let FindManyLogInArgs = class FindManyLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereInput_1.LogInWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereInput_1.LogInWhereInput)
], FindManyLogInArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInOrderByWithRelationInput_1.LogInOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyLogInArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereUniqueInput_1.LogInWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereUniqueInput_1.LogInWhereUniqueInput)
], FindManyLogInArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyLogInArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyLogInArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInScalarFieldEnum_1.LogInScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyLogInArgs.prototype, "distinct", void 0);
FindManyLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyLogInArgs);
exports.FindManyLogInArgs = FindManyLogInArgs;
