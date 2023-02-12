"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInOrderByWithRelationInput_1 = require("../../../inputs/LogInOrderByWithRelationInput");
const LogInWhereInput_1 = require("../../../inputs/LogInWhereInput");
const LogInWhereUniqueInput_1 = require("../../../inputs/LogInWhereUniqueInput");
let AggregateLogInArgs = class AggregateLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereInput_1.LogInWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereInput_1.LogInWhereInput)
], AggregateLogInArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInOrderByWithRelationInput_1.LogInOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateLogInArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereUniqueInput_1.LogInWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereUniqueInput_1.LogInWhereUniqueInput)
], AggregateLogInArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLogInArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLogInArgs.prototype, "skip", void 0);
AggregateLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateLogInArgs);
exports.AggregateLogInArgs = AggregateLogInArgs;
