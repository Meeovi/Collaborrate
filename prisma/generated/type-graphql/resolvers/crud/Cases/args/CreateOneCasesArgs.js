"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesCreateInput_1 = require("../../../inputs/CasesCreateInput");
let CreateOneCasesArgs = class CreateOneCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesCreateInput_1.CasesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesCreateInput_1.CasesCreateInput)
], CreateOneCasesArgs.prototype, "data", void 0);
CreateOneCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCasesArgs);
exports.CreateOneCasesArgs = CreateOneCasesArgs;
