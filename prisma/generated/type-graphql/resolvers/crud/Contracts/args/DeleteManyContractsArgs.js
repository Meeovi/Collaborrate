"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsWhereInput_1 = require("../../../inputs/ContractsWhereInput");
let DeleteManyContractsArgs = class DeleteManyContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereInput_1.ContractsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereInput_1.ContractsWhereInput)
], DeleteManyContractsArgs.prototype, "where", void 0);
DeleteManyContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyContractsArgs);
exports.DeleteManyContractsArgs = DeleteManyContractsArgs;
