"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsUpdateInput_1 = require("../../../inputs/ContractsUpdateInput");
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
let UpdateOneContractsArgs = class UpdateOneContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsUpdateInput_1.ContractsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsUpdateInput_1.ContractsUpdateInput)
], UpdateOneContractsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], UpdateOneContractsArgs.prototype, "where", void 0);
UpdateOneContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneContractsArgs);
exports.UpdateOneContractsArgs = UpdateOneContractsArgs;
