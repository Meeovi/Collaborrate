"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
let FindUniqueContractsArgs = class FindUniqueContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], FindUniqueContractsArgs.prototype, "where", void 0);
FindUniqueContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueContractsArgs);
exports.FindUniqueContractsArgs = FindUniqueContractsArgs;
