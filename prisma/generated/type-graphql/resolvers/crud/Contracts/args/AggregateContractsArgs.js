"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ContractsOrderByWithRelationAndSearchRelevanceInput");
const ContractsWhereInput_1 = require("../../../inputs/ContractsWhereInput");
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
let AggregateContractsArgs = class AggregateContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereInput_1.ContractsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereInput_1.ContractsWhereInput)
], AggregateContractsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsOrderByWithRelationAndSearchRelevanceInput_1.ContractsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateContractsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], AggregateContractsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateContractsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateContractsArgs.prototype, "skip", void 0);
AggregateContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateContractsArgs);
exports.AggregateContractsArgs = AggregateContractsArgs;
