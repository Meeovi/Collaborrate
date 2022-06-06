"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsCreateInput_1 = require("../../../inputs/ContractsCreateInput");
let CreateContractsArgs = class CreateContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsCreateInput_1.ContractsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsCreateInput_1.ContractsCreateInput)
], CreateContractsArgs.prototype, "data", void 0);
CreateContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateContractsArgs);
exports.CreateContractsArgs = CreateContractsArgs;
