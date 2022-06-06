"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsUpdateManyMutationInput_1 = require("../../../inputs/ContractsUpdateManyMutationInput");
const ContractsWhereInput_1 = require("../../../inputs/ContractsWhereInput");
let UpdateManyContractsArgs = class UpdateManyContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsUpdateManyMutationInput_1.ContractsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsUpdateManyMutationInput_1.ContractsUpdateManyMutationInput)
], UpdateManyContractsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereInput_1.ContractsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereInput_1.ContractsWhereInput)
], UpdateManyContractsArgs.prototype, "where", void 0);
UpdateManyContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyContractsArgs);
exports.UpdateManyContractsArgs = UpdateManyContractsArgs;
