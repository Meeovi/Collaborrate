"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
let DeleteContractsArgs = class DeleteContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], DeleteContractsArgs.prototype, "where", void 0);
DeleteContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteContractsArgs);
exports.DeleteContractsArgs = DeleteContractsArgs;
