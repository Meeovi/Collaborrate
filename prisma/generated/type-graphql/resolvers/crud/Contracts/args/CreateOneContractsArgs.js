"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsCreateInput_1 = require("../../../inputs/ContractsCreateInput");
let CreateOneContractsArgs = class CreateOneContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsCreateInput_1.ContractsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ContractsCreateInput_1.ContractsCreateInput)
], CreateOneContractsArgs.prototype, "data", void 0);
CreateOneContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneContractsArgs);
exports.CreateOneContractsArgs = CreateOneContractsArgs;
