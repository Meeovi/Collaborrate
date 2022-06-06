"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesCreateInput_1 = require("../../../inputs/CasesCreateInput");
let CreateCasesArgs = class CreateCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesCreateInput_1.CasesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesCreateInput_1.CasesCreateInput)
], CreateCasesArgs.prototype, "data", void 0);
CreateCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCasesArgs);
exports.CreateCasesArgs = CreateCasesArgs;
