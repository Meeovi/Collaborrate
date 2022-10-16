"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
let DeleteOneContractsArgs = class DeleteOneContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], DeleteOneContractsArgs.prototype, "where", void 0);
DeleteOneContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneContractsArgs);
exports.DeleteOneContractsArgs = DeleteOneContractsArgs;
