"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsUpdateInput_1 = require("../../../inputs/ContractsUpdateInput");
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
let UpdateContractsArgs = class UpdateContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsUpdateInput_1.ContractsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsUpdateInput_1.ContractsUpdateInput)
], UpdateContractsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], UpdateContractsArgs.prototype, "where", void 0);
UpdateContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateContractsArgs);
exports.UpdateContractsArgs = UpdateContractsArgs;
