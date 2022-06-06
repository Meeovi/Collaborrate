"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsCreateInput_1 = require("../../../inputs/ContractsCreateInput");
const ContractsUpdateInput_1 = require("../../../inputs/ContractsUpdateInput");
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
let UpsertContractsArgs = class UpsertContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], UpsertContractsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsCreateInput_1.ContractsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsCreateInput_1.ContractsCreateInput)
], UpsertContractsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsUpdateInput_1.ContractsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsUpdateInput_1.ContractsUpdateInput)
], UpsertContractsArgs.prototype, "update", void 0);
UpsertContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertContractsArgs);
exports.UpsertContractsArgs = UpsertContractsArgs;
